import { MainLayout } from "@/components/layout/main-layout";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function SearchPage() {
  return (
    <MainLayout>
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Search</h1>
        <p className="text-muted-foreground">
          Find your favorite songs, artists, albums, and podcasts.
        </p>
        <Input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full max-w-md"
        />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Browse All</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {/* Placeholder for genre/mood cards */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-secondary rounded-lg p-4 h-32 flex items-center justify-center text-muted-foreground">
                Genre/Mood {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
}