# Static Music Streaming App (Yorushika Catalog)

A modern, dark-themed music streaming layout application built with React Native and Expo Router. This project serves as a standalone client interface mapping out album releases, track lists, and a modular media player interface.

## 📱 Screens Included
1. **Home Screen (`app/index.tsx`)**: Displays custom greeting layouts, quick access grids, and horizontal album shelves.
2. **Album Detail Screen (`app/album.tsx`)**: Receives tracking parameters to dynamically loop out song row selectors and filter specific track titles.
3. **Music Player Dashboard (`app/player.tsx`)**: A static playback control panel rendering the active song metadata, current album art, progress indicators, and roadmap features.

## 🧩 Reusable Custom Components
- **`AlbumCard` (`components/AlbumCard.tsx`)**: A modular layout card parsing image elements, rendering custom tag headers, and housing marquee text wrappers.
- **`SongRow` (`components/SongRow.tsx`)**: A repetitive line element widget organizing list indices, styling title components, and tracking press routing hooks.

## 📦 Third-Party Packages Used
- **`react-native-text-ticker`**: Integrated to manage smooth, animated horizontal text marquees for elongated album titles.

## 🚀 How to Run the Project
1. Open your terminal using VS Code in the root project directory. 
   ```bash
   C:\Yorushika_music
   ```
3. Install the necessary packages:
   ```bash
   npm install
   npm install react-native-text-ticker
   ```
4. Boot up the local compilation server:
   ```bash
   npx expo start
   ```
5. Scan the QR code via Iphone15 using the **Expo Go** application.

---
**Student Name:** [Weah Joy T. Jacinto]
**Class Section:** [CS42A]
