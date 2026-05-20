import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import {
  FaApple,
  FaGithub,
  FaFilePdf,
  FaMusic,
  FaStickyNote,
  FaCloudSun,
  FaCalendarAlt,
  FaTerminal,
  FaFolder,
  FaSafari,
  FaCog,
} from "react-icons/fa"
import { VscCode } from "react-icons/vsc"

function AppStoreApp() {
  const { closeWindow, openWindow } = useWindowStore()

  const apps = [
    {
      name: "Finder",
      window: "finder",
      icon: <FaFolder size={42} />,
      desc: "Explore projects and files.",
    },
    {
      name: "Terminal",
      window: "terminal",
      icon: <FaTerminal size={42} />,
      desc: "Run portfolio commands.",
    },
    {
      name: "Safari",
      window: "safari",
      icon: <FaSafari size={42} />,
      desc: "Browse social links.",
    },
    {
      name: "VS Code",
      window: "vscode",
      icon: <VscCode size={42} />,
      desc: "View project source files.",
    },
    {
      name: "GitHub",
      window: "github",
      icon: <FaGithub size={42} />,
      desc: "Live GitHub profile.",
    },
    {
      name: "Resume",
      window: "resume",
      icon: <FaFilePdf size={42} />,
      desc: "View resume details.",
    },
    {
      name: "Music",
      window: "music",
      icon: <FaMusic size={42} />,
      desc: "Play ambient music.",
    },
    {
      name: "Notes",
      window: "notes",
      icon: <FaStickyNote size={42} />,
      desc: "Save quick notes.",
    },
    {
      name: "Weather",
      window: "weather",
      icon: <FaCloudSun size={42} />,
      desc: "Check weather card.",
    },
    {
      name: "Calendar",
      window: "calendar",
      icon: <FaCalendarAlt size={42} />,
      desc: "View calendar.",
    },
    {
      name: "Settings",
      window: "settings",
      icon: <FaCog size={42} />,
      desc: "Customize theme and wallpaper.",
    },
  ]

  return (
    <Window
      title="App Store"
      closeWindow={() => closeWindow("appstore")}
      windowName="appstore"
    >
      <div className="h-[560px] overflow-y-auto">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-3xl bg-blue-500 flex items-center justify-center">
            <FaApple size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">App Store</h1>
            <p className="text-gray-400">
              Open portfolio apps like a real macOS system.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {apps.map((app) => (
            <div
              key={app.window}
              className="bg-white/10 border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:bg-white/15 transition"
            >
              <div className="w-20 h-20 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-center text-white">
                {app.icon}
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold">{app.name}</h2>
                <p className="text-gray-400 text-sm mt-1">{app.desc}</p>
              </div>

              <button
                onClick={() => openWindow(app.window)}
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full font-semibold transition"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export default AppStoreApp