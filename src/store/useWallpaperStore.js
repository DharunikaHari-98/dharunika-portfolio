import { create } from "zustand"

const wallpapers = [

  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",

  "https://images.unsplash.com/photo-1519608487953-e999c86e7455",

]

const useWallpaperStore = create((set) => ({

  currentWallpaper: wallpapers[0],

  wallpapers,

  setWallpaper: (wallpaper) =>

    set({
      currentWallpaper: wallpaper,
    }),

}))

export default useWallpaperStore