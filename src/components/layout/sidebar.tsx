import Link from "next/link";
import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockPlaylists } from "@/lib/data"; // Import mockPlaylists

export function Sidebar() {
  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Search", icon: Search, href: "/search" },
    { name: "Your Library", icon: Library, href: "/library" },
  ];

  const playlistItems = [
    { name: "Create Playlist", icon: Plus, href: "/create-playlist" },
    { name: "Liked Songs", icon: Heart, href: "/liked-songs" },
  ];

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-4 text-2xl font-bold text-sidebar-primary-foreground">
        Music App
      </div>
      <nav className="flex flex-col gap-1 p-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                item.href === "/" && "bg-sidebar-accent text-sidebar-accent-foreground" // Example active state
              )}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="mt-4 flex flex-col gap-1 p-2">
        {playlistItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
      <div className="mt-4 flex-grow overflow-hidden">
        <h3 className="px-4 py-2 text-sm font-semibold text-sidebar-foreground">Your Playlists</h3>
        <ScrollArea className="h-[calc(100%-40px)] px-2 pb-4">
          <div className="flex flex-col gap-1">
            {mockPlaylists.map((playlist) => ( // Use mockPlaylists here
              <Link key={playlist.id} href={`/playlist/${playlist.id}`}> {/* Link to dynamic playlist page */}
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                >
                  {playlist.name}
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}