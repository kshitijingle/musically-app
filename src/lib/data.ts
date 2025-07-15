export const mockAlbums = [
  {
    id: "1",
    title: "Epic Journey",
    artist: "Free Music Artist 1",
    cover: "https://picsum.photos/id/10/300/300", // Placeholder image URL
    year: 2023,
    songs: [
      { id: "s1", title: "Morning Breeze", duration: "1:30", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }, // Placeholder audio URL
      { id: "s2", title: "Forest Walk", duration: "2:49", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { id: "s3", title: "Mountain Peak", duration: "3:50", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { id: "s4", title: "River Flow", duration: "7:06", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { id: "s5", title: "Night Sky", duration: "4:43", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    ],
  },
  {
    id: "2",
    title: "Chill Vibes",
    artist: "Free Music Artist 2",
    cover: "https://picsum.photos/id/20/300/300", // Placeholder image URL
    year: 2022,
    songs: [
      { id: "s6", title: "Coffee Shop Jazz", duration: "3:02", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
      { id: "s7", title: "Rainy Day Study", duration: "4:20", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { id: "s8", title: "Sunset Lounge", duration: "3:42", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { id: "s9", title: "Cozy Evening", duration: "5:57", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    ],
  },
  {
    id: "3",
    title: "Upbeat Pop",
    artist: "Free Music Artist 3",
    cover: "https://picsum.photos/id/30/300/300", // Placeholder image URL
    year: 2024,
    songs: [
      { id: "s10", title: "City Lights", duration: "2:43", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
      { id: "s11", title: "Summer Fun", duration: "4:14", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
      { id: "s12", title: "Dance Floor", duration: "2:14", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
      { id: "s13", title: "Good Times", duration: "3:13", audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    ],
  },
];

export const mockSongs = [
  {
    id: "song1",
    title: "Acoustic Dream",
    artist: "Free Music Artist 4",
    album: "Relaxing Tunes",
    duration: "3:20",
    cover: "https://picsum.photos/id/40/300/300", // Placeholder image URL
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
  },
  {
    id: "song2",
    title: "Upbeat Corporate",
    artist: "Free Music Artist 5",
    album: "Background Music",
    duration: "3:53",
    cover: "https://picsum.photos/id/50/300/300", // Placeholder image URL
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
  },
  {
    id: "song3",
    title: "Inspiring Cinematic",
    artist: "Free Music Artist 6",
    album: "Movie Scores",
    duration: "3:23",
    cover: "https://picsum.photos/id/60/300/300", // Placeholder image URL
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
  },
  {
    id: "song4",
    title: "Funky Groove",
    artist: "Free Music Artist 7",
    album: "Dance Hits",
    duration: "2:58",
    cover: "https://picsum.photos/id/70/300/300", // Placeholder image URL
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
  },
  {
    id: "song5",
    title: "Calm Piano",
    artist: "Free Music Artist 8",
    album: "Study Music",
    duration: "3:51",
    cover: "https://picsum.photos/id/80/300/300", // Placeholder image URL
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
  },
];

export const mockArtists = [
  {
    id: "artist1",
    name: "Free Music Artist 1",
    image: "https://picsum.photos/id/90/300/300",
  },
  {
    id: "artist2",
    name: "Free Music Artist 2",
    image: "https://picsum.photos/id/100/300/300",
  },
  {
    id: "artist3",
    name: "Free Music Artist 3",
    image: "https://picsum.photos/id/110/300/300",
  },
  {
    id: "artist4",
    name: "Free Music Artist 4",
    image: "https://picsum.photos/id/120/300/300",
  },
  {
    id: "artist5",
    name: "Free Music Artist 5",
    image: "https://picsum.photos/id/130/300/300",
  },
];

export const mockPlaylists = [
  {
    id: "playlist1",
    name: "My Top Songs",
    description: "A collection of my all-time favorite tracks.",
    cover: "https://picsum.photos/id/140/300/300", // Placeholder image URL
    songs: [mockSongs[0], mockSongs[2], mockSongs[4]],
  },
  {
    id: "playlist2",
    name: "Workout Mix",
    description: "High-energy tracks to power your workout.",
    cover: "https://picsum.photos/id/150/300/300", // Placeholder image URL
    songs: [mockSongs[1], mockSongs[3], mockSongs[0]],
  },
  {
    id: "playlist3",
    name: "Chill Vibes",
    description: "Relaxing tunes for unwinding and chilling out.",
    cover: "https://picsum.photos/id/160/300/300", // Placeholder image URL
    songs: [mockSongs[4], mockSongs[1], mockSongs[2]],
  },
  {
    id: "playlist4",
    name: "Focus Music",
    description: "Instrumental and ambient tracks for concentration.",
    cover: "https://picsum.photos/id/170/300/300", // Placeholder image URL
    songs: [mockSongs[0], mockSongs[3], mockSongs[1]],
  },
  {
    id: "playlist5",
    name: "Road Trip Anthems",
    description: "Sing along to these classics on your next adventure.",
    cover: "https://picsum.photos/id/180/300/300", // Placeholder image URL
    songs: [mockSongs[2], mockSongs[4], mockSongs[0]],
  },
];