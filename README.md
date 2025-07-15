# 🎶 Musically App

A modern web music player application, inspired by Spotify, built with Next.js and designed for a seamless user experience. Discover, play, and manage your favorite tunes with a sleek interface and robust features.

## 🚀 Live Demo

Experience the app live: [https://musicallyapp.netlify.app/](https://musicallyapp.netlify.app/)

## ✨ Features

*   **Intuitive User Interface:** A clean, responsive design that adapts to various screen sizes.
*   **Music Playback:** Play, pause, skip, and seek through songs.
*   **Volume Control:** Adjust playback volume and mute/unmute.
*   **Shuffle & Repeat Modes:** Enjoy your music with shuffle playback or repeat individual songs/queues.
*   **Dynamic Playlists:** Browse and play songs from pre-defined albums and playlists.
*   **Library Management:** View your liked songs, artists, albums, and playlists in one place.
*   **Search Functionality:** Easily find songs, artists, albums, and podcasts.
*   **Create Playlists:** Option to create new custom playlists.
*   **Theming:** Toggle between light and dark modes for personalized viewing.
*   **Responsive Layout:** Optimized for both desktop and mobile devices using `react-resizable-panels`.
*   **Toast Notifications:** Informative pop-up messages for user actions (e.g., "Now playing").

![Uploading {7F7E9F38-EF1E-4533-BA4D-D4CE26728042}.png…]()


## 🛠️ Tech Stack

This application is built using a modern and robust set of technologies:

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) (built with Radix UI and Tailwind CSS)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/icons/)
*   **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation
*   **State Management**: React Context API and built-in React hooks (`useState`, `useReducer`)
*   **Notifications/Toasts**: [Sonner](https://sonner.emilkowalski.com/)
*   **Charts**: [Recharts](https://recharts.org/en-US/) (though not extensively used in current features, available)
*   **Animation**: `tailwindcss-animate` and Radix UI animations

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js (v18 or higher recommended) and pnpm installed.

*   **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/)
*   **pnpm**: If you don't have pnpm, install it globally:
    ```bash
    npm install -g pnpm
    ```

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kshitijingle/musically-app.git
    cd musically-app
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Running Locally

1.  **Start the development server:**
    ```bash
    pnpm run dev
    ```

2.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 💡 Future Enhancements (To-Dos)

*   **User Authentication:** Implement user login/signup to personalize libraries and playlists.
*   **Backend Integration:** Connect to a real database (e.g., Supabase, Firebase) for persistent data storage.
*   **Dynamic Content Loading:** Fetch songs, albums, and artists from an API instead of mock data.
*   **Playlist Editing:** Allow users to add/remove songs from custom playlists.
*   **Search Filtering & Sorting:** Enhance search results with filtering by genre, artist, etc., and sorting options.
*   **User Profiles:** Create user profiles with listening history and preferences.
*   **Recommendations:** Implement a basic recommendation engine based on listening habits.
*   **Queue Management:** Allow users to reorder songs in the playback queue.
*   **Offline Mode:** Enable basic functionality when offline using service workers.
*   **Accessibility Improvements:** Further enhance keyboard navigation and screen reader support.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
