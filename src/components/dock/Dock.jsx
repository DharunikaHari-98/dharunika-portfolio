import {
  FaUser,
  FaFolder,
  FaTerminal,
  FaSafari,
  FaMusic,
  FaStickyNote,
  FaCloudSun,
  FaCalendarAlt,
  FaCog,
  FaGithub,
  FaFilePdf,
  FaAppStore,
  FaEnvelope,
} from "react-icons/fa"

import { motion } from "framer-motion"
import { VscCode } from "react-icons/vsc"
import useWindowStore from "../../store/useWindowStore"

function Dock() {
  const { openWindow, windows } = useWindowStore()

  const dockApps = [
    {
      name: "about",
      icon: <FaUser size={28} />,
      bg: "from-pink-500 to-purple-600",
    },
    {
      name: "finder",
      icon: <FaFolder size={30} />,
      bg: "from-blue-400 to-blue-700",
    },
    {
      name: "terminal",
      icon: <FaTerminal size={28} />,
      bg: "from-gray-700 to-black",
    },
    {
      name: "safari",
      icon: <FaSafari size={30} />,
      bg: "from-cyan-400 to-blue-700",
    },
    {
      name: "vscode",
      icon: <VscCode size={30} />,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      name: "github",
      icon: <FaGithub size={30} />,
      bg: "from-gray-800 to-gray-950",
    },
    {
      name: "resume",
      icon: <FaFilePdf size={28} />,
      bg: "from-red-500 to-orange-600",
    },
    {
      name: "contact",
      icon: <FaEnvelope size={28} />,
      bg: "from-green-400 to-emerald-700",
    },
    {
      name: "appstore",
      icon: <FaAppStore size={30} />,
      bg: "from-sky-400 to-blue-700",
    },
    {
      name: "music",
      icon: <FaMusic size={28} />,
      bg: "from-pink-500 to-red-600",
    },
    {
      name: "notes",
      icon: <FaStickyNote size={28} />,
      bg: "from-yellow-300 to-yellow-600",
    },
    {
      name: "weather",
      icon: <FaCloudSun size={30} />,
      bg: "from-blue-300 to-indigo-600",
    },
    {
      name: "calendar",
      icon: <FaCalendarAlt size={28} />,
      bg: "from-red-400 to-pink-600",
    },
    {
      name: "settings",
      icon: <FaCog size={30} />,
      bg: "from-gray-400 to-gray-700",
    },
  ]

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[2rem] px-6 py-3 flex gap-5 shadow-2xl">
        {dockApps.map((app) => (
          <div key={app.name} className="flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.35, y: -12 }}
              whileTap={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              onClick={() => openWindow(app.name)}
              className={`
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                ${app.bg}
                flex
                items-center
                justify-center
                text-white
                shadow-xl
                border
                border-white/20
              `}
            >
              {app.icon}
            </motion.button>

            {windows[app.name] && (
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dock