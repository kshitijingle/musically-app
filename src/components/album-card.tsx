import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlbumCardProps {
  album: {
    id: string;
    title: string;
    artist: string;
    cover: string;
  };
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link href={`/album/${album.id}`} className="group relative flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md shadow-md">
        <Image
          src={album.cover}
          alt={album.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating to album page
            // Handle play action
            console.log(`Playing album: ${album.title}`);
          }}
        >
          <PlayCircle className="h-6 w-6 fill-current" />
        </Button>
      </div>
      <h3 className="text-base font-semibold w-full truncate">{album.title}</h3>
      <p className="text-sm text-muted-foreground w-full truncate">{album.artist}</p>
    </Link>
  );
}