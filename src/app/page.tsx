import { MadeWithDyad } from "@/components/made-with-dyad";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Welcome to your Music App!</h1>
        <p className="text-muted-foreground">
          This is your home page. Use the sidebar to navigate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Featured Playlist</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Discover new music tailored for you.</p>
              <div className="mt-4 h-24 w-full bg-secondary rounded-md flex items-center justify-center text-muted-foreground">
                Playlist Cover
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recently Played</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground">
                <li>Song 1 - Artist A</li>
                <li>Song 2 - Artist B</li>
                <li>Song 3 - Artist C</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Artists</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground">
                <li>Artist X</li>
                <li>Artist Y</li>
                <li>Artist Z</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}