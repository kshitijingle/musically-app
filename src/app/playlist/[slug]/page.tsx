"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PlayCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockPlaylists } from "@/lib/data"; // Import mockPlaylists
import { useMusicPlayer } from "@/context/music-player-context"; // Import the hook

interface PlaylistPageProps {
  params: {
    slug: string;
  };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const { playSong } = useMusicPlayer();
  const playlist = mockPlaylists.find((p) => p.id === params.slug);

  if (!playlist) {
    return (
      <MainLayout>
        <div className="grid gap-6">
          <h1 className="text-3xl font-bold">Playlist Not Found</h1>
          <p className="text-muted-foreground">
            The playlist you are looking for does not exist.
          </p>
        </div>
        <div className="mt-8">
          <MadeWithDyad />
        </div>
      </MainLayout>
    );
  }

  const handlePlayPlaylist = () => {
    if (playlist.songs.length > 0) {
      playSong(playlist.songs[0]); // Play the first song of the playlist
    }
  };

  // Calculate total duration of the playlist
  const totalDurationSeconds = playlist.songs.reduce((total, song) => {
    const [minutes, seconds] = song.duration.split(':').map(Number);
    return total + (minutes * 60) + seconds;
  }, 0);

  const totalMinutes = Math.floor(totalDurationSeconds / 60);
  const remainingSeconds = totalDurationSeconds % 60;
  const formattedTotalDuration = `${totalMinutes} min ${remainingSeconds} sec`;

  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-6">
          <div className="relative h-48 w-48 flex-shrink-0 rounded-md overflow-hidden shadow-lg bg-secondary flex items-center justify-center text-muted-foreground text-lg font-semibold">
            {playlist.cover ? (
              <img src={playlist.cover} alt={playlist.name} className="w-full h-full object-cover" />
            ) : (
              "Playlist Cover"
            )}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">Playlist</p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2">{playlist.name}</h1>
            <p className="text-muted-foreground mt-2">{playlist.description}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {playlist.songs.length} songs, {formattedTotalDuration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <Button size="lg" className="rounded-full px-8 py-4 text-lg" onClick={handlePlayPlaylist}>
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
              {playlist.songs.map((song, i) => (
                <tr key={song.id} className="border-b border-border/50 hover:bg-muted/50 cursor-pointer" onClick={() => playSong(song)}>
                  <td className="py-3 px-4 text-sm">{i + 1}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-secondary rounded-md flex-shrink-0 overflow-hidden">
                        {song.cover && <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />}
                      </div>
                      <div>
                        <p className="font-medium">{song.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{song.artist}</td>
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