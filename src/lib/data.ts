export const mockAlbums = [
  {
    id: "1",
    title: "Echoes of the Forest",
    artist: "Mystic Grove",
    cover: "https://picsum.photos/id/1001/300/300",
    year: 2023,
    songs: [
      { id: "s1", title: "Whispering Pines", duration: "1:30", audioSrc: "/audio/amalgam-217007.mp3" },
      { id: "s2", title: "Hidden Stream", duration: "2:49", audioSrc: "/audio/creative-technology-showreel-241274.mp3" },
      { id: "s3", title: "Ancient Roots", duration: "3:50", audioSrc: "/audio/dont-talk-315229.mp3" },
      { id: "s4", title: "Sunlit Glade", duration: "7:06", audioSrc: "/audio/drive-breakbeat-173062.mp3" },
      { id: "s5", title: "Twilight Bloom", duration: "4:43", audioSrc: "/audio/flow-211881.mp3" },
    ],
  },
  {
    id: "2",
    title: "Urban Rhythms",
    artist: "City Beat Collective",
    cover: "https://picsum.photos/id/1002/300/300",
    year: 2022,
    songs: [
      { id: "s6", title: "Streetlights Glow", duration: "3:02", audioSrc: "/audio/gardens-stylish-chill-303261.mp3" },
      { id: "s7", title: "Midnight Drive", duration: "4:20", audioSrc: "/audio/movement-200697.mp3" },
      { id: "s8", title: "Rooftop Serenade", duration: "3:42", audioSrc: "/audio/nightfall-future-bass-music-228100.mp3" },
      { id: "s9", title: "Concrete Jungle", duration: "5:57", audioSrc: "/audio/tell-me-the-truth-260010.mp3" },
    ],
  },
  {
    id: "3",
    title: "Cosmic Harmonies",
    artist: "Stellar Echoes",
    cover: "https://picsum.photos/id/1003/300/300",
    year: 2024,
    songs: [
      { id: "s10", title: "Nebula Drift", duration: "2:43", audioSrc: "/audio/amalgam-217007.mp3" }, // Cycle back to first new audio
      { id: "s11", title: "Galactic Pulse", duration: "4:14", audioSrc: "/audio/creative-technology-showreel-241274.mp3" },
      { id: "s12", title: "Astral Dance", duration: "2:14", audioSrc: "/audio/dont-talk-315229.mp3" },
      { id: "s13", title: "Distant Stars", duration: "3:13", audioSrc: "/audio/drive-breakbeat-173062.mp3" },
    ],
  },
];

export const mockSongs = [
  {
    id: "song1",
    title: "Ocean's Embrace",
    artist: "Aqua Tones",
    album: "Deep Blue",
    duration: "3:20",
    cover: "https://picsum.photos/id/1004/300/300",
    audioSrc: "/audio/flow-211881.mp3", // Continue cycling
  },
  {
    id: "song2",
    title: "Desert Wind",
    artist: "Sand Dunes",
    album: "Arid Lands",
    duration: "3:53",
    cover: "https://picsum.photos/id/1005/300/300",
    audioSrc: "/audio/gardens-stylish-chill-303261.mp3",
  },
  {
    id: "song3",
    title: "Mountain Echo",
    artist: "Peak Performers",
    album: "Summit Sounds",
    duration: "3:23",
    cover: "https://picsum.photos/id/1006/300/300",
    audioSrc: "/audio/movement-200697.mp3",
  },
  {
    id: "song4",
    title: "River's Journey",
    artist: "Flowing Melodies",
    album: "Waterways",
    duration: "2:58",
    cover: "https://picsum.photos/id/1020/300/300",
    audioSrc: "/audio/nightfall-future-bass-music-228100.mp3",
  },
  {
    id: "song5",
    title: "Starlight Lullaby",
    artist: "Celestial Dreams",
    album: "Night Sky",
    duration: "3:51",
    cover: "https://picsum.photos/id/1008/300/300",
    audioSrc: "/audio/tell-me-the-truth-260010.mp3",
  },
];

export const mockArtists = [
  {
    id: "artist1",
    name: "Mystic Grove",
    image: "https://picsum.photos/id/1009/300/300",
  },
  {
    id: "artist2",
    name: "City Beat Collective",
    image: "https://picsum.photos/id/1010/300/300",
  },
  {
    id: "artist3",
    name: "Stellar Echoes",
    image: "https://picsum.photos/id/1011/300/300",
  },
  {
    id: "artist4",
    name: "Aqua Tones",
    image: "https://picsum.photos/id/1012/300/300",
  },
  {
    id: "artist5",
    name: "Sand Dunes",
    image: "https://picsum.photos/id/1013/300/300",
  },
];

export const mockPlaylists = [
  {
    id: "playlist1",
    name: "Morning Chill",
    description: "Relaxing tunes for a peaceful start to your day.",
    cover: "https://picsum.photos/id/1014/300/300",
    songs: [
      { ...mockSongs[0], audioSrc: "/audio/flow-211881.mp3" },
      { ...mockSongs[2], audioSrc: "/audio/movement-200697.mp3" },
      { ...mockSongs[4], audioSrc: "/audio/tell-me-the-truth-260010.mp3" }
    ],
  },
  {
    id: "playlist2",
    name: "Energetic Workout",
    description: "High-energy tracks to power your workout.",
    cover: "https://picsum.photos/id/1015/300/300",
    songs: [
      { ...mockSongs[1], audioSrc: "/audio/gardens-stylish-chill-303261.mp3" },
      { ...mockSongs[3], audioSrc: "/audio/nightfall-future-bass-music-228100.mp3" },
      { ...mockSongs[0], audioSrc: "/audio/flow-211881.mp3" }
    ],
  },
  {
    id: "playlist3",
    name: "Study Focus",
    description: "Ambient and instrumental tracks for deep concentration.",
    cover: "https://picsum.photos/id/1016/300/300",
    songs: [
      { ...mockSongs[4], audioSrc: "/audio/tell-me-the-truth-260010.mp3" },
      { ...mockSongs[1], audioSrc: "/audio/gardens-stylish-chill-303261.mp3" },
      { ...mockSongs[2], audioSrc: "/audio/movement-200697.mp3" }
    ],
  },
  {
    id: "playlist4",
    name: "Road Trip Jams",
    description: "Sing along to these classics on your next adventure.",
    cover: "https://picsum.photos/id/1017/300/300",
    songs: [
      { ...mockSongs[0], audioSrc: "/audio/flow-211881.mp3" },
      { ...mockSongs[3], audioSrc: "/audio/nightfall-future-bass-music-228100.mp3" },
      { ...mockSongs[1], audioSrc: "/audio/gardens-stylish-chill-303261.mp3" }
    ],
  },
  {
    id: "playlist5",
    name: "Evening Unwind",
    description: "Calming melodies to help you relax before bed.",
    cover: "https://picsum.photos/id/1018/300/300",
    songs: [
      { ...mockSongs[2], audioSrc: "/audio/movement-200697.mp3" },
      { ...mockSongs[4], audioSrc: "/audio/tell-me-the-truth-260010.mp3" },
      { ...mockSongs[0], audioSrc: "/audio/flow-211881.mp3" }
    ],
  },
];