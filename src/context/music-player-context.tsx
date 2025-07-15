"use client";

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { mockSongs, mockAlbums } from '@/lib/data';

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
    }
  }, []);

  const playSong = (song: Song) => {
    if (audioRef.current) {
      if (currentSong?.id !== song.id) {
        audioRef.current.src = song.audioSrc;
        setCurrentSong(song);
        audioRef.current.load(); // Load the new source
      }
      audioRef.current.play();
      setIsPlaying(true);
      console.log(`Playing: ${song.title} by ${song.artist}`);
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
      <audio ref={audioRef} preload="auto" />
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