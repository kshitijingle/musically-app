import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function CreatePlaylistPage() {
  return (
    <MainLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Create New Playlist</h1>
        <p className="text-muted-foreground">
          Give your new playlist a name and description.
        </p>

        <div className="grid gap-4 max-w-lg">
          <div>
            <label htmlFor="playlist-name" className="block text-sm font-medium text-foreground mb-1">
              Playlist Name
            </label>
            <Input id="playlist-name" placeholder="My Awesome Playlist" />
          </div>
          <div>
            <label htmlFor="playlist-description" className="block text-sm font-medium text-foreground mb-1">
              Description (Optional)
            </label>
            <Textarea id="playlist-description" placeholder="A collection of my favorite tunes." rows={3} />
          </div>
          <Button className="w-fit">Create Playlist</Button>
        </div>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}