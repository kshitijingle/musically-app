"use client";

import React from "react"; // Import React to use React.use()
import { MainLayout } from "@/components/layout/main-layout";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PlayCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { mockAlbums } from "@/lib/data";
import { useMusicPlayer } from "@/context/music-player-context";

interface AlbumPageProps {
  params: Promise<{ id: string }>; // params is now a Promise
}

export default function AlbumPage({ params: paramsPromise }: AlbumPageProps) {
  // Unwrap the params promise using React.use()
  const params = React.use(paramsPromise);

  const { playSong, playAlbum } = useMusicPlayer();
  const album = mockAlbums.find((a) => a.id === params.id);

  if (!album) {
    return (
      <MainLayout>
        <div className="grid gap-6">
          <h1 className="text-3xl font-bold">Album Not Found</h1>
          <p className="text-muted-foreground">
            The album you are looking for does not exist.
          </p>
        </div>
        <div className="mt-8">
          <MadeWithDyad />
        </div>
      </MainLayout>
    );
  }

  const handlePlayAlbum = () => {
    playAlbum(album.id);
  };

  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-6">
          <div className="relative h-48 w-48 flex-shrink-0 rounded-md overflow-hidden shadow-lg">
            <Image
              src={album.cover}
              alt={album.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">Album</p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">{album.title}</h1>
            <p className="text-muted-foreground mt-2">{album.artist} • {album.year}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {album.songs.length} songs, approx {
                // Calculate total duration
                album.songs.reduce((total, song) => {
                  const [minutes, seconds] = song.duration.split(':').map(Number);
                  return total + (minutes * 60) + seconds;
                }, 0) / 60
              } min
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <Button size="lg" className="rounded-full px-8 py-4 text-lg" onClick={handlePlayAlbum}>
            <PlayCircle className="mr-2 h-6 w-6 fill-current" /> Play
          </Button>
          {/* Add other actions like Like, Share etc. */}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-muted-foreground text-sm border-b border-border">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">TITLE</th>
                <th className="py-2 px-4">ARTIST</th>
                <th className="py-2 px-4 text-right"><Clock className="h-4 w-4 inline-block" /></th>
              </tr>
            </thead>
            <tbody>
              {album.songs.map((song, i) => (
                <tr key={song.id} className="border-b border-border/50 hover:bg-muted/50 cursor-pointer" onClick={() => playSong({
                  id: song.id,
                  title: song.title,
                  artist: album.artist,
                  album: album.title,
                  cover: album.cover,
                  duration: song.duration,
                  audioSrc: song.audioSrc,
                }, album.songs.map(s => ({ // Pass the full album songs as the queue
                  id: s.id,
                  title: s.title,
                  artist: album.artist,
                  album: album.title,
                  cover: album.cover,
                  duration: s.duration,
                  audioSrc: s.audioSrc,
                })), i)}>
                  <td className="py-3 px-4 text-sm">{i + 1}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-secondary rounded-md flex-shrink-0 overflow-hidden">
                        <Image src={album.cover} alt={album.title} layout="fill" objectFit="cover" />
                      </div>
                      <div>
                        <p className="font-medium">{song.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{album.artist}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground text-right">{song.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}