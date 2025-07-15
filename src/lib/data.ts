export const mockAlbums = [
  {
    id: "1",
    title: "Epic Journey",
    artist: "Free Music Artist 1",
    cover: "/images/album-cover-1.jpg", // Placeholder image, replace with your file
    year: 2023,
    songs: [
      { id: "s1", title: "Morning Breeze", duration: "1:30", audioSrc: "/audio/song-1.mp3" }, // Placeholder audio, replace with your file
      { id: "s2", title: "Forest Walk", duration: "2:49", audioSrc: "/audio/song-2.mp3" },
      { id: "s3", title: "Mountain Peak", duration: "3:50", audioSrc: "/audio/song-3.mp3" },
      { id: "s4", title: "River Flow", duration: "7:06", audioSrc: "/audio/song-4.mp3" },
      { id: "s5", title: "Night Sky", duration: "4:43", audioSrc: "/audio/song-5.mp3" },
    ],
  },
  {
    id: "2",
    title: "Chill Vibes",
    artist: "Free Music Artist 2",
    cover: "/images/album-cover-2.jpg", // Placeholder image, replace with your file
    year: 2022,
    songs: [
      { id: "s6", title: "Coffee Shop Jazz", duration: "3:02", audioSrc: "/audio/song-6.mp3" },
      { id: "s7", title: "Rainy Day Study", duration: "4:20", audioSrc: "/audio/song-7.mp3" },
      { id: "s8", title: "Sunset Lounge", duration: "3:42", audioSrc: "/audio/song-8.mp3" },
      { id: "s9", title: "Cozy Evening", duration: "5:57", audioSrc: "/audio/song-9.mp3" },
    ],
  },
  {
    id: "3",
    title: "Upbeat Pop",
    artist: "Free Music Artist 3",
    cover: "/images/album-cover-3.jpg", // Placeholder image, replace with your file
    year: 2024,
    songs: [
      { id: "s10", title: "City Lights", duration: "2:43", audioSrc: "/audio/song-10.mp3" },
      { id: "s11", title: "Summer Fun", duration: "4:14", audioSrc: "/audio/song-11.mp3" },
      { id: "s12", title: "Dance Floor", duration: "2:14", audioSrc: "/audio/song-12.mp3" },
      { id: "s13", title: "Good Times", duration: "3:13", audioSrc: "/audio/song-13.mp3" },
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
    cover: "/images/song-cover-1.jpg", // Placeholder image, replace with your file
    audioSrc: "/audio/song-14.mp3",
  },
  {
    id: "song2",
    title: "Upbeat Corporate",
    artist: "Free Music Artist 5",
    album: "Background Music",
    duration: "3:53",
    cover: "/images/song-cover-2.jpg", // Placeholder image, replace with your file
    audioSrc: "/audio/song-15.mp3",
  },
  {
    id: "song3",
    title: "Inspiring Cinematic",
    artist: "Free Music Artist 6",
    album: "Movie Scores",
    duration: "3:23",
    cover: "/images/song-cover-3.jpg", // Placeholder image, replace with your file
    audioSrc: "/audio/song-16.mp3",
  },
  {
    id: "song4",
    title: "Funky Groove",
    artist: "Free Music Artist 7",
    album: "Dance Hits",
    duration: "2:58",
    cover: "/images/song-cover-4.jpg", // Placeholder image, replace with your file
    audioSrc: "/audio/song-17.mp3",
  },
  {
    id: "song5",
    title: "Calm Piano",
    artist: "Free Music Artist 8",
    album: "Study Music",
    duration: "3:51",
    cover: "/images/song-cover-5.jpg", // Placeholder image, replace with your file
    audioSrc: "/audio/song-18.mp3",
  },
];

export const mockArtists = [
  {
    id: "artist1",
    name: "Free Music Artist 1",
    image: "/images/artist-1.jpg",
  },
  {
    id: "artist2",
    name: "Free Music Artist 2",
    image: "/images/artist-2.jpg",
  },
  {
    id: "artist3",
    name: "Free Music Artist 3",
    image: "/images/artist-3.jpg",
  },
  {
    id: "artist4",
    name: "Free Music Artist 4",
    image: "/images/artist-4.jpg",
  },
  {
    id: "artist5",
    name: "Free Music Artist 5",
    image: "/images/artist-5.jpg",
  },
];

export const mockPlaylists = [
  {
    id: "playlist1",
    name: "My Top Songs",
    description: "A collection of my all-time favorite tracks.",
    cover: "/images/playlist-cover-1.jpg", // Placeholder image
    songs: [mockSongs[0], mockSongs[2], mockSongs[4]],
  },
  {
    id: "playlist2",
    name: "Workout Mix",
    description: "High-energy tracks to power your workout.",
    cover: "/images/playlist-cover-2.jpg", // Placeholder image
    songs: [mockSongs[1], mockSongs[3], mockSongs[0]],
  },
  {
    id: "playlist3",
    name: "Chill Vibes",
    description: "Relaxing tunes for unwinding and chilling out.",
    cover: "/images/playlist-cover-3.jpg", // Placeholder image
    songs: [mockSongs[4], mockSongs[1], mockSongs[2]],
  },
  {
    id: "playlist4",
    name: "Focus Music",
    description: "Instrumental and ambient tracks for concentration.",
    cover: "/images/playlist-cover-4.jpg", // Placeholder image
    songs: [mockSongs[0], mockSongs[3], mockSongs[1]],
  },
  {
    id: "playlist5",
    name: "Road Trip Anthems",
    description: "Sing along to these classics on your next adventure.",
    cover: "/images/playlist-cover-5.jpg", // Placeholder image
    songs: [mockSongs[2], mockSongs[4], mockSongs[0]],
  },
];