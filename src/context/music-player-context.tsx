"use client";

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { mockSongs, mockAlbums, mockPlaylists } from '@/lib/data'; // Import mockPlaylists
import { toast } from 'sonner'; // Import toast for notifications

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string; // Still keeping string for display, but actual duration will come from audio element
  audioSrc: string; // New property for audio file path
}

interface MusicPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playSong: (song: Song, queue?: Song[], queueIndex?: number) => void; // Modified to accept queue
  pauseSong: () => void;
  togglePlayPause: () => void;
  playAlbum: (albumId: string) => void;
  playPlaylist: (playlistId: string) => void; // New: play entire playlist
  playNextSong: () => void; // New
  playPreviousSong: () => void; // New
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
  shuffleMode: boolean; // New
  repeatMode: 'off' | 'song' | 'queue'; // New
  toggleShuffle: () => void; // New
  toggleRepeat: () => void; // New
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.75);
  const [queue, setQueue] = useState<Song[]>([]); // New: current playback queue (can be shuffled)
  const [queueIndex, setQueueIndex] = useState<number>(-1); // New: index of current song in queue
  const [originalQueue, setOriginalQueue] = useState<Song[]>([]); // New: Store the original, unshuffled queue
  const [shuffleMode, setShuffleMode] = useState(false); // New
  const [repeatMode, setRepeatMode] = useState<'off' | 'song' | 'queue'>('off'); // New

  // Utility for shuffling an array (Fisher-Yates)
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const playSong = (song: Song, newQueue?: Song[], newQueueIndex?: number) => {
    if (audioRef.current) {
      // If a new queue is provided, set it as original and potentially shuffle
      if (newQueue) {
        setOriginalQueue(newQueue);
        if (shuffleMode) {
          const shuffled = shuffleArray([...newQueue]);
          setQueue(shuffled);
          const newIndex = shuffled.findIndex(s => s.id === song.id);
          setQueueIndex(newIndex !== -1 ? newIndex : 0);
        } else {
          setQueue(newQueue);
          setQueueIndex(newQueueIndex !== undefined ? newQueueIndex : 0);
        }
      } else if (!newQueue && currentSong?.id !== song.id) {
        // If playing a single song not from a queue, clear the queue and set this as the original
        setOriginalQueue([song]);
        setQueue([song]);
        setQueueIndex(0);
      } else if (currentSong?.id === song.id && isPlaying) {
        // If same song is clicked and already playing, do nothing
        return;
      }

      // Only update source if it's a different song or if it's the first play
      if (currentSong?.id !== song.id || !audioRef.current.src) {
        audioRef.current.src = song.audioSrc;
        setCurrentSong(song);
        audioRef.current.load(); // Explicitly load the new source
      }
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          toast.success(`Now playing: ${song.title}`);
        }).catch(error => {
          console.error("Error playing audio:", error);
          toast.error(`Failed to play ${song.title}.`);
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(true); // Fallback for older browsers
        toast.success(`Now playing: ${song.title}`);
      }
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      console.log(`Paused: ${currentSong?.title}`);
    }
  };

  const togglePlayPause = () => {
    if (currentSong && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
      console.log(isPlaying ? `Paused: ${currentSong.title}` : `Playing: ${currentSong.title}`);
    }
  };

  const playAlbum = (albumId: string) => {
    const album = mockAlbums.find(a => a.id === albumId);
    if (album && album.songs.length > 0) {
      const fullSongs: Song[] = album.songs.map(s => ({
        id: s.id,
        title: s.title,
        artist: album.artist,
        album: album.title,
        cover: album.cover,
        duration: s.duration,
        audioSrc: s.audioSrc,
      }));
      playSong(fullSongs[0], fullSongs, 0); // Play first song of the album, set album as queue
    } else {
      console.warn(`Album with ID ${albumId} not found or has no songs.`);
      toast.error("Album not found or has no songs.");
    }
  };

  const playPlaylist = (playlistId: string) => {
    const playlist = mockPlaylists.find(p => p.id === playlistId);
    if (playlist && playlist.songs.length > 0) {
      playSong(playlist.songs[0], playlist.songs, 0); // Play first song of the playlist, set playlist as queue
    } else {
      console.warn(`Playlist with ID ${playlistId} not found or has no songs.`);
      toast.error("Playlist not found or has no songs.");
    }
  };

  const playNextSong = () => {
    if (queue.length === 0) {
      toast.info("No songs in queue.");
      return;
    }

    if (repeatMode === 'song' && currentSong) {
      playSong(currentSong, queue, queueIndex); // Replay current song
      return;
    }

    let nextIndex = queueIndex + 1;
    if (shuffleMode) {
      // Pick a random song from the original queue that is not the current one
      const availableSongs = originalQueue.filter(s => s.id !== currentSong?.id);
      if (availableSongs.length > 0) {
        const randomSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];
        const newIndexInQueue = queue.findIndex(s => s.id === randomSong.id);
        if (newIndexInQueue !== -1) {
          playSong(randomSong, queue, newIndexInQueue);
        } else {
          // Fallback if random song not found in current queue (shouldn't happen if queue is shuffled original)
          toast.info("Could not find a random next song.");
        }
      } else {
        // If only one song or no other songs to shuffle to, just end or repeat if queue repeat is on
        if (repeatMode === 'queue') {
          playSong(queue[0], queue, 0); // Loop back to start
        } else {
          setIsPlaying(false);
          setCurrentTime(0);
          setCurrentSong(null);
          setQueue([]);
          setQueueIndex(-1);
          toast.info("Queue ended.");
        }
      }
      return;
    }

    if (nextIndex >= queue.length) {
      if (repeatMode === 'queue') {
        nextIndex = 0; // Loop back to start of queue
      } else {
        setIsPlaying(false);
        setCurrentTime(0);
        setCurrentSong(null);
        setQueue([]);
        setQueueIndex(-1);
        toast.info("Queue ended.");
        return;
      }
    }
    playSong(queue[nextIndex], queue, nextIndex);
  };

  const playPreviousSong = () => {
    if (queue.length === 0) {
      toast.info("No songs in queue.");
      return;
    }

    let prevIndex = queueIndex - 1;
    if (prevIndex < 0) {
      if (repeatMode === 'queue') {
        prevIndex = queue.length - 1; // Loop back to end of queue
      } else {
        toast.info("No previous song in queue.");
        return;
      }
    }
    playSong(queue[prevIndex], queue, prevIndex);
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolumeState(newVolume);
    }
  };

  const toggleShuffle = () => {
    setShuffleMode(prev => {
      const newShuffleMode = !prev;
      if (newShuffleMode) {
        // If turning shuffle ON, shuffle the original queue and set it as the active queue
        if (originalQueue.length > 0) {
          const shuffled = shuffleArray([...originalQueue]);
          setQueue(shuffled);
          // Find the current song's index in the new shuffled queue
          const currentSongId = currentSong?.id;
          const newIndex = currentSongId ? shuffled.findIndex(s => s.id === currentSongId) : 0;
          setQueueIndex(newIndex !== -1 ? newIndex : 0);
        }
        toast.info("Shuffle ON");
      } else {
        // If turning shuffle OFF, revert to the original queue
        setQueue(originalQueue);
        // Find the current song's index in the original queue
        const currentSongId = currentSong?.id;
        const newIndex = currentSongId ? originalQueue.findIndex(s => s.id === currentSongId) : 0;
        setQueueIndex(newIndex !== -1 ? newIndex : 0);
        toast.info("Shuffle OFF");
      }
      return newShuffleMode;
    });
  };

  const toggleRepeat = () => {
    setRepeatMode(prev => {
      if (prev === 'off') {
        toast.info("Repeat Song");
        return 'song';
      } else if (prev === 'song') {
        toast.info("Repeat Queue");
        return 'queue';
      } else {
        toast.info("Repeat Off");
        return 'off';
      }
    });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      audioRef.current.onended = () => {
        if (repeatMode === 'song' && currentSong) {
          playSong(currentSong, queue, queueIndex); // Replay current song
        } else {
          playNextSong(); // Use the new playNextSong logic
        }
      };

      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };

      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };

      audioRef.current.onerror = () => {
        const audio = audioRef.current;
        let errorMessage = "An unknown audio error occurred.";

        if (audio && audio.error) {
          console.error("Audio playback error:", audio.error);
          switch (audio.error.code) {
            case MediaError.MEDIA_ERR_ABORTED:
              errorMessage = "Audio playback aborted by the user.";
              break;
            case MediaError.MEDIA_ERR_NETWORK:
              errorMessage = "A network error prevented audio playback. This might be due to CORS restrictions or the file not being available.";
              break;
            case MediaError.MEDIA_ERR_DECODE:
              errorMessage = "The audio file is corrupted or uses an unsupported format.";
              break;
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              errorMessage = "The audio source is not supported or could not be loaded. This might be due to CORS restrictions or an invalid URL.";
              break;
            default:
              errorMessage = `An unexpected audio error occurred (Code: ${audio.error.code}).`;
              break;
          }
        } else {
          console.error("Audio playback error: No specific error object available.");
          errorMessage = "An unknown audio error occurred. This might be due to a network issue or unsupported media.";
        }
        
        toast.error(errorMessage);
        setIsPlaying(false);
      };
    }
  }, [volume, queue, queueIndex, repeatMode, shuffleMode, currentSong, playNextSong, playSong]); // Add new dependencies

  return (
    <MusicPlayerContext.Provider value={{
      currentSong, isPlaying, currentTime, duration, volume,
      playSong, pauseSong, togglePlayPause, playAlbum, playPlaylist,
      playNextSong, playPreviousSong, seekTo, setVolume,
      shuffleMode, repeatMode, toggleShuffle, toggleRepeat
    }}>
      {children}
      <audio ref={audioRef} preload="auto" crossOrigin="anonymous" />
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
}