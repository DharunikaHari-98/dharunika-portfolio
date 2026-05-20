import Window from "../windows/Window"

import useWindowStore from "../../store/useWindowStore"

import useThemeStore from "../../store/useThemeStore"

import useWallpaperStore from "../../store/useWallpaperStore"

function SettingsApp() {

  const { closeWindow } = useWindowStore()

  const {
    darkMode,
    toggleTheme,
  } = useThemeStore()

  const {

    wallpapers,

    setWallpaper,

    currentWallpaper,

  } = useWallpaperStore()

  return (

    <Window
      title="Settings"
      closeWindow={() => closeWindow("settings")}
      windowName="settings"
    >

      <div className="space-y-10">

        <h1 className="text-4xl font-bold">

          System Settings

        </h1>

        {/* APPEARANCE */}
        <div className="
          bg-white/10
          p-6
          rounded-3xl
          border
          border-white/10
        ">

          <h2 className="text-2xl font-semibold mb-5">

            Appearance

          </h2>

          <button

            onClick={toggleTheme}

            className="
              bg-purple-600
              hover:bg-purple-700
              px-6
              py-3
              rounded-2xl
              transition
            "
          >

            Switch to {darkMode ? "Light" : "Dark"} Mode

          </button>

        </div>

        {/* WALLPAPERS */}
        <div className="
          bg-white/10
          p-6
          rounded-3xl
          border
          border-white/10
        ">

          <h2 className="text-2xl font-semibold mb-6">

            Wallpapers

          </h2>

          <div className="
            grid
            grid-cols-2
            gap-5
          ">

            {
              wallpapers.map((wallpaper, index) => (

                <button

                  key={index}

                  onClick={() =>
                    setWallpaper(wallpaper)
                  }

                  className={`
                    relative
                    rounded-2xl
                    overflow-hidden
                    border-4
                    transition-all

                    ${
                      currentWallpaper === wallpaper
                        ? "border-purple-500 scale-105"
                        : "border-transparent"
                    }
                  `}
                >

                  <img

                    src={wallpaper}

                    alt="wallpaper"

                    className="
                      w-full
                      h-36
                      object-cover
                    "

                  />

                </button>

              ))
            }

          </div>

        </div>

      </div>

    </Window>

  )
}

export default SettingsApp