"use client"; // Mark as client component

import Image from "next/image";
import Link from "next/link";
import { useMusicPlayer } from "@/context/music-player-context"; // Import the hook

interface AlbumCardProps {
  album: {
    id: string;
    title: string;
    artist: string;
    cover: string;
  };
}

export function AlbumCard({ album }: AlbumCardProps) {
  const { playAlbum } = useMusicPlayer();

  return (
    <div
      className="group relative flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
      onClick={() => playAlbum(album.id)}
    >
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md shadow-md">
        <Image
          src={album.cover}
          alt={album.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <Link href={`/album/${album.id}`} className="w-full">
        <h3 className="text-base font-semibold w-full truncate group-hover:underline">{album.title}</h3>
      </Link>
      <p className="text-sm text-muted-foreground w-full truncate">{album.artist}</p>
    </div>
  );
}