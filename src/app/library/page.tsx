import { MainLayout } from "@/components/layout/main-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MadeWithDyad } from "@/components/made-with-dyad";
import Image from "next/image"; // Import Image component
import Link from "next/link"; // Import Link for navigation
import { mockPlaylists, mockArtists, mockAlbums, mockSongs } from "@/lib/data"; // Import all mock data

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Your Library</h1>
        <p className="text-muted-foreground">
          Access your saved songs, albums, artists, and podcasts.
        </p>

        <Tabs defaultValue="playlists" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="albums">Albums</TabsTrigger>
            <TabsTrigger value="songs">Songs</TabsTrigger>
          </TabsList>
          <TabsContent value="playlists" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockPlaylists.map((playlist) => (
                <Link href={`/playlist/${playlist.id}`} key={playlist.id}>
                  <div className="bg-card p-4 rounded-lg shadow-sm hover:bg-muted/50 transition-colors duration-200 cursor-pointer">
                    <div className="relative h-24 w-full bg-muted rounded-md mb-2 overflow-hidden">
                      {playlist.cover ? (
                        <Image
                          src={playlist.cover}
                          alt={playlist.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground text-sm">No Cover</div>
                      )}
                    </div>
                    <h3 className="font-medium truncate">{playlist.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{playlist.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="artists" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Artists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockArtists.map((artist) => (
                <div key={artist.id} className="bg-card p-4 rounded-lg shadow-sm text-center hover:bg-muted/50 transition-colors duration-200 cursor-pointer">
                  <div className="relative h-24 w-24 rounded-full bg-muted mx-auto mb-2 overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-medium truncate">{artist.name}</h3>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="albums" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockAlbums.map((album) => (
                <Link href={`/album/${album.id}`} key={album.id}>
                  <div className="bg-card p-4 rounded-lg shadow-sm hover:bg-muted/50 transition-colors duration-200 cursor-pointer">
                    <div className="relative h-24 w-full bg-muted rounded-md mb-2 overflow-hidden">
                      <Image
                        src={album.cover}
                        alt={album.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <h3 className="font-medium truncate">{album.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{album.artist}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="songs" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Songs</h2>
            <ul className="space-y-2">
              {mockSongs.map((song) => (
                <li key={song.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 bg-secondary rounded-md flex-shrink-0 overflow-hidden">
                      <Image
                        src={song.cover}
                        alt={song.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <p className="font-medium truncate">{song.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{song.artist} • {song.album}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{song.duration}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}