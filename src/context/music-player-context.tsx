"use client";

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { mockSongs, mockAlbums } from '@/lib/data';
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
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlayPause: () => void;
  playAlbum: (albumId: string) => void;
  seekTo: (time: number) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        // Potentially play next song in a playlist here
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
          console.error("Audio playback error:", audio.error); // Log the actual error object
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
  }, []);

  const playSong = (song: Song) => {
    if (audioRef.current) {
      // If it's a new song, update the source and wait for it to be ready
      if (currentSong?.id !== song.id) {
        audioRef.current.src = song.audioSrc;
        setCurrentSong(song);
        // Use a promise-based approach or event listener for 'canplay'
        const playWhenReady = () => {
          if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
            console.log(`Playing: ${song.title} by ${song.artist}`);
            audioRef.current.removeEventListener('canplay', playWhenReady); // Clean up listener
          }
        };
        audioRef.current.addEventListener('canplay', playWhenReady);
        audioRef.current.load(); // Explicitly load the new source
      } else {
        // If it's the same song, just toggle play/pause
        audioRef.current.play();
        setIsPlaying(true);
        console.log(`Playing: ${song.title} by ${song.artist}`);
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
      // For simplicity, play the first song of the album
      const firstSong = album.songs[0];
      const fullSongDetails: Song = {
        id: firstSong.id,
        title: firstSong.title,
        artist: album.artist,
        album: album.title,
        cover: album.cover,
        duration: firstSong.duration,
        audioSrc: firstSong.audioSrc,
      };
      playSong(fullSongDetails);
    } else {
      console.warn(`Album with ID ${albumId} not found or has no songs.`);
    }
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <MusicPlayerContext.Provider value={{ currentSong, isPlaying, currentTime, duration, playSong, pauseSong, togglePlayPause, playAlbum, seekTo }}>
      {children}
      {/* The actual audio element, hidden from view */}
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