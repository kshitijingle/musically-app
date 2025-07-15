"use client"; // Mark as client component

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMusicPlayer } from "@/context/music-player-context"; // Import the hook

interface SongCardProps {
  song: {
    id: string;
    title: string;
    artist: string;
    album: string;
    cover: string;
    duration: string;
  };
}

export function SongCard({ song }: SongCardProps) {
  const { playSong } = useMusicPlayer();

  return (
    <div className="group relative flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors duration-200">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md mr-3">
        <Image
          src={song.cover}
          alt={song.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-medium truncate">{song.title}</h3>
        <p className="text-xs text-muted-foreground truncate">{song.artist} • {song.album}</p>
      </div>
      <span className="text-xs text-muted-foreground ml-auto mr-4">{song.duration}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        onClick={() => {
          playSong(song); // Play the song using context
        }}
      >
        <PlayCircle className="h-5 w-5 fill-current" />
      </Button>
    </div>
  );
}