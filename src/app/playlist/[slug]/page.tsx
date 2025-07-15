"use client"; // Added this line

import { MainLayout } from "@/components/layout/main-layout";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PlayCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined }; // Added searchParams
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const playlistName = params.slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="h-48 w-48 bg-secondary rounded-md flex-shrink-0 flex items-center justify-center text-muted-foreground text-lg font-semibold">
            Playlist Cover
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Playlist</p>
            <h1 className="text-5xl font-bold mt-2">{playlistName}</h1>
            <p className="text-muted-foreground mt-2">A description of this amazing playlist.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Artist Name • 10 songs, 45 min 30 sec
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <Button size="lg" className="rounded-full px-8 py-4 text-lg">
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
                <th className="py-2 px-4">ALBUM</th>
                <th className="py-2 px-4">DATE ADDED</th>
                <th className="py-2 px-4 text-right"><Clock className="h-4 w-4 inline-block" /></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/50">
                  <td className="py-3 px-4 text-sm">{i + 1}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-secondary rounded-md flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Song Title {i + 1}</p>
                        <p className="text-sm text-muted-foreground">Artist Name</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Album Name</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">2 days ago</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground text-right">3:45</td>
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