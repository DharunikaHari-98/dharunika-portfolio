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

function Launchpad({ closeLaunchpad }) {
  const { openWindow } = useWindowStore()

  const apps = [
    { title: "About", icon: <FaUser size={50} />, window: "about" },
    { title: "Finder", icon: <FaFolder size={50} />, window: "finder" },
    { title: "Terminal", icon: <FaTerminal size={50} />, window: "terminal" },
    { title: "Safari", icon: <FaSafari size={50} />, window: "safari" },
    { title: "VS Code", icon: <VscCode size={50} />, window: "vscode" },
    { title: "GitHub", icon: <FaGithub size={50} />, window: "github" },
    { title: "Resume", icon: <FaFilePdf size={50} />, window: "resume" },
    { title: "Contact", icon: <FaEnvelope size={50} />, window: "contact" },
    { title: "App Store", icon: <FaAppStore size={50} />, window: "appstore" },
    { title: "Music", icon: <FaMusic size={50} />, window: "music" },
    { title: "Notes", icon: <FaStickyNote size={50} />, window: "notes" },
    { title: "Weather", icon: <FaCloudSun size={50} />, window: "weather" },
    { title: "Calendar", icon: <FaCalendarAlt size={50} />, window: "calendar" },
    { title: "Settings", icon: <FaCog size={50} />, window: "settings" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/50 backdrop-blur-3xl z-[999] flex items-center justify-center"
    >
      <div className="absolute inset-0" onClick={closeLaunchpad}></div>

      <div className="relative grid grid-cols-4 gap-16 z-10">
        {apps.map((app) => (
          <motion.div
            key={app.window}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              openWindow(app.window)
              closeLaunchpad()
            }}
            className="flex flex-col items-center gap-4 cursor-pointer"
          >
            <div className="w-28 h-28 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-2xl">
              {app.icon}
            </div>

            <p className="text-white text-lg">{app.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Launchpad