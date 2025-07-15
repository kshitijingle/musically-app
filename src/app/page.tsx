import { MadeWithDyad } from "@/components/made-with-dyad";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Greeting } from "@/components/greeting";
import { AlbumCard } from "@/components/album-card";
import { SongCard } from "@/components/song-card";
import { mockAlbums, mockSongs } from "@/lib/data";

export default function Home() {
  // Get a few random albums for "Jump back in"
  const recentlyPlayedAlbums = mockAlbums.slice(0, 3);
  // Get a few random songs for "Made for you"
  const madeForYouSongs = mockSongs.slice(0, 5);

  return (
    <MainLayout>
      <div className="grid gap-6">
        <Greeting />
        <p className="text-muted-foreground">
          Explore new music and revisit your favorites.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Jump back in</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {recentlyPlayedAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Made for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {madeForYouSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}