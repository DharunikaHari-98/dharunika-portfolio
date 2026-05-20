import { useEffect, useState } from "react"

import TopBar from "../topbar/TopBar"
import Dock from "../dock/Dock"
import DesktopIcons from "./DesktopIcons"
import BootScreen from "./BootScreen"
import Launchpad from "./Launchpad"
import Spotlight from "./Spotlight"

import NotificationCenter from "../system/NotificationCenter"
import ContextMenu from "../system/ContextMenu"

import SettingsApp from "../apps/SettingsApp"
import VSCodeApp from "../apps/VSCodeApp"
import AboutApp from "../apps/AboutApp"
import FinderApp from "../apps/FinderApp"
import TerminalApp from "../apps/TerminalApp"
import SafariApp from "../apps/SafariApp"

import useWindowStore from "../../store/useWindowStore"
import useThemeStore from "../../store/useThemeStore"
import useWallpaperStore from "../../store/useWallpaperStore"

import MusicApp from "../apps/MusicApp"
import NotesApp from "../apps/NotesApp"
import WeatherApp from "../apps/WeatherApp"
import CalendarApp from "../apps/CalendarApp"
function Desktop() {

  const { windows } = useWindowStore()

  const { darkMode } =
    useThemeStore()

  const { currentWallpaper } =
    useWallpaperStore()

  const [loading, setLoading] =
    useState(true)

  const [showLaunchpad, setShowLaunchpad] =
    useState(false)

  const [showSpotlight, setShowSpotlight] =
    useState(false)

  const [contextMenu, setContextMenu] =
    useState(null)

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 3000)

    const handleKeyDown = (e) => {

      // SPOTLIGHT
      if (
        (e.ctrlKey || e.metaKey) &&
        e.code === "Space"
      ) {

        e.preventDefault()

        setShowSpotlight(true)
      }

      // ESC CLOSE
      if (e.key === "Escape") {

        setShowSpotlight(false)

        setContextMenu(null)
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {

      clearTimeout(timer)

      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }

  }, [])

  if (loading) {

    return <BootScreen />
  }

  return (

    <div

      onContextMenu={(e) => {

        e.preventDefault()

        setContextMenu({

          x: e.pageX,

          y: e.pageY,
        })
      }}

      onClick={() =>
        setContextMenu(null)
      }

      className={`
        h-screen
        w-full
        bg-cover
        bg-center
        overflow-hidden
        relative
        transition-all
        duration-500

        ${
          darkMode
            ? "bg-black"
            : "bg-gray-200"
        }
      `}

      style={{
        backgroundImage:
          `url(${currentWallpaper})`,
      }}
    >

      {/* OVERLAY */}
      <div
        className={`
          absolute
          inset-0
          transition-all
          duration-500

          ${
            darkMode
              ? "bg-black/30"
              : "bg-white/20"
          }
        `}
      ></div>

      {/* TOP BAR */}
      <TopBar />

      {/* NOTIFICATIONS */}
      <NotificationCenter />

      {/* DESKTOP ICONS */}
      <DesktopIcons />

      {/* WINDOWS */}
      {windows.about && <AboutApp />}

      {windows.finder && <FinderApp />}

      {windows.terminal && <TerminalApp />}

      {windows.safari && <SafariApp />}

      {windows.vscode && <VSCodeApp />}

      {windows.settings && <SettingsApp />}

{windows.music && <MusicApp />}
{windows.notes && <NotesApp />}
{windows.weather && <WeatherApp />}
{windows.calendar && <CalendarApp />}
      {/* SPOTLIGHT */}
      {
        showSpotlight && (
          <Spotlight
            closeSpotlight={() =>
              setShowSpotlight(false)
            }
          />
        )
      }

      {/* LAUNCHPAD */}
      {
        showLaunchpad && (
          <Launchpad
            closeLaunchpad={() =>
              setShowLaunchpad(false)
            }
          />
        )
      }

      {/* CONTEXT MENU */}
      {
        contextMenu && (

          <ContextMenu

            x={contextMenu.x}

            y={contextMenu.y}

            closeMenu={() =>
              setContextMenu(null)
            }

          />

        )
      }

      {/* OPEN BUTTON */}
      <button

        onClick={() =>
          setShowLaunchpad(true)
        }

        className="
          absolute
          bottom-32
          right-8
          bg-white/10
          border
          border-white/20
          backdrop-blur-xl
          rounded-2xl
          px-6
          py-4
          text-white
          hover:bg-white/20
          transition
          z-50
        "
      >

        Open Launchpad 🚀

      </button>

      {/* DOCK */}
      <Dock />

    </div>

  )
}

export default Desktop