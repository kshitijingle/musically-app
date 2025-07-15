import { MainLayout } from "@/components/layout/main-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MadeWithDyad } from "@/components/made-with-dyad";

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
              {/* Placeholder for user playlists */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card p-4 rounded-lg shadow-sm">
                  <div className="h-24 w-full bg-muted rounded-md mb-2"></div>
                  <h3 className="font-medium">My Playlist {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">Description or # songs</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="artists" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Artists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Placeholder for user artists */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card p-4 rounded-lg shadow-sm text-center">
                  <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-2"></div>
                  <h3 className="font-medium">Artist {i + 1}</h3>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="albums" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Placeholder for user albums */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card p-4 rounded-lg shadow-sm">
                  <div className="h-24 w-full bg-muted rounded-md mb-2"></div>
                  <h3 className="font-medium">Album {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">Artist Name</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="songs" className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Your Songs</h2>
            <ul className="space-y-2">
              {/* Placeholder for user songs */}
              {[...Array(10)].map((_, i) => (
                <li key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                  <div>
                    <p className="font-medium">Song {i + 1}</p>
                    <p className="text-sm text-muted-foreground">Artist Name</p>
                  </div>
                  <span className="text-sm text-muted-foreground">3:30</span>
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