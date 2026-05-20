import {
  FaUser,
  FaFolder,
  FaTerminal,
  FaSafari,
} from "react-icons/fa"

import { motion } from "framer-motion"
import { VscCode } from "react-icons/vsc"
import useWindowStore from "../../store/useWindowStore"

function Launchpad({ closeLaunchpad }) {

  const { openWindow } = useWindowStore()

  const apps = [

    {
      title: "About",
      icon: <FaUser size={50} />,
      action: () => openWindow("about"),
    },
{
  title: "VS Code",
  icon: <VscCode size={50} />,
  action: () => openWindow("vscode"),
},
    {
      title: "Finder",
      icon: <FaFolder size={50} />,
      action: () => openWindow("finder"),
    },

    {
      title: "Terminal",
      icon: <FaTerminal size={50} />,
      action: () => openWindow("terminal"),
    },

    {
      title: "Safari",
      icon: <FaSafari size={50} />,
      action: () => openWindow("safari"),
    },

  ]

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: 1.1,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      exit={{
        opacity: 0,
      }}

      className="absolute inset-0 bg-black/50 backdrop-blur-3xl z-[999] flex items-center justify-center"
    >

      {/* CLOSE AREA */}
      <div
        className="absolute inset-0"
        onClick={closeLaunchpad}
      ></div>

      {/* APPS GRID */}
      <div className="relative grid grid-cols-4 gap-16 z-10">

        {apps.map((app, index) => (

          <motion.div

            key={index}

            whileHover={{
              scale: 1.15,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={() => {
              app.action()
              closeLaunchpad()
            }}

            className="flex flex-col items-center gap-4 cursor-pointer"
          >

            <div className="w-28 h-28 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-2xl">

              {app.icon}

            </div>

            <p className="text-white text-lg">
              {app.title}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>

  )
}

export default Launchpad