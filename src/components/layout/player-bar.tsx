"use client"; // Mark as client component

import { Play, Pause, SkipForward, SkipBack, Volume2, Shuffle, Repeat, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useMusicPlayer } from "@/context/music-player-context"; // Import the hook

// Helper function to format time from seconds to MM:SS
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}:${formattedSeconds}`;
};

export function PlayerBar() {
  const { currentSong, isPlaying, togglePlayPause, currentTime, duration, seekTo, volume, setVolume, playNextSong, playPreviousSong } = useMusicPlayer();

  const handleSliderChange = (value: number[]) => {
    if (duration > 0) {
      const newTime = (value[0] / 100) * duration;
      seekTo(newTime);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0] / 100); // Convert 0-100 slider value to 0-1 volume
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0); // Mute
    } else {
      setVolume(0.75); // Unmute to a default level
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-card border-t border-border h-20">
      {/* Current Song Info */}
      <div className="flex items-center gap-3 w-1/4">
        <div className="h-12 w-12 bg-muted rounded-md flex-shrink-0 overflow-hidden">
          {currentSong?.cover && (
            <img src={currentSong.cover} alt={currentSong.title} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{currentSong?.title || "No song playing"}</span>
          <span className="text-xs text-muted-foreground">{currentSong?.artist || "Unknown Artist"}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-1/2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Shuffle className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={playPreviousSong} disabled={!currentSong}>
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={togglePlayPause}
            disabled={!currentSong}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-current" />
            ) : (
              <Play className="h-5 w-5 fill-current" />
            )}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={playNextSong} disabled={!currentSong}>
            <SkipForward className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Repeat className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        <div className="flex items-center w-full gap-2 text-xs text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <Slider
            value={[duration > 0 ? (currentTime / duration) * 100 : 0]}
            max={100}
            step={0.1}
            className="flex-grow"
            onValueChange={handleSliderChange}
            disabled={!currentSong}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume and Other Controls */}
      <div className="flex items-center justify-end gap-2 w-1/4">
        <Button variant="ghost" size="icon" onClick={toggleMute} className="h-8 w-8">
          {volume === 0 ? (
            <VolumeX className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Volume2 className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
        <Slider
          value={[volume * 100]} // Convert 0-1 volume to 0-100 slider value
          max={100}
          step={1}
          className="w-[100px]"
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}