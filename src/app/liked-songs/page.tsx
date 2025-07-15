import { MainLayout } from "@/components/layout/main-layout";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Heart } from "lucide-react";

export default function LikedSongsPage() {
  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-24 w-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-white">
            <Heart size={48} fill="currentColor" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Playlist</p>
            <h1 className="text-4xl font-bold">Liked Songs</h1>
            <p className="text-muted-foreground">Your collection of liked tracks.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Songs</h2>
        <ul className="space-y-2">
          {/* Placeholder for liked songs */}
          {[...Array(15)].map((_, i) => (
            <li key={i} className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-secondary rounded-md flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Liked Song {i + 1}</p>
                  <p className="text-sm text-muted-foreground">Artist Name</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">3:30</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}