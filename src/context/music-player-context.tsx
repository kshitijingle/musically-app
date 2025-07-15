"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockSongs, mockAlbums } from '@/lib/data';

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string;
}

interface MusicPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlayPause: () => void;
  playAlbum: (albumId: string) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    console.log(`Playing: ${song.title} by ${song.artist}`);
  };

  const pauseSong = () => {
    setIsPlaying(false);
    console.log(`Paused: ${currentSong?.title}`);
  };

  const togglePlayPause = () => {
    if (currentSong) {
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
      };
      playSong(fullSongDetails);
    } else {
      console.warn(`Album with ID ${albumId} not found or has no songs.`);
    }
  };

  return (
    <MusicPlayerContext.Provider value={{ currentSong, isPlaying, playSong, pauseSong, togglePlayPause, playAlbum }}>
      {children}
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