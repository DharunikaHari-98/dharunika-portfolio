import {
  FaUser,
  FaFolder,
  FaTerminal,
} from "react-icons/fa"
import { FaSafari } from "react-icons/fa"
import { motion } from "framer-motion"
import { VscCode } from "react-icons/vsc"
import useWindowStore from "../../store/useWindowStore"
import { FaMusic, FaStickyNote, FaCloudSun, FaCalendarAlt, FaCog } from "react-icons/fa"

function Dock() {

  const {
    openWindow,
    windows,
  } = useWindowStore()

  const dockApps = [

    {
      name: "about",
      icon: <FaUser size={34} color="white" />,
    },

    {
      name: "finder",
      icon: <FaFolder size={34} color="white" />,
    },

    {
      name: "terminal",
      icon: <FaTerminal size={34} color="white" />,
    },
{
  name: "safari",
  icon: <FaSafari size={34} color="white" />,
},
{
  name: "vscode",
  icon: <VscCode size={34} color="white" />,
},
{
  name: "music",
  icon: <FaMusic size={34} color="white" />,
},
{
  name: "notes",
  icon: <FaStickyNote size={34} color="white" />,
},
{
  name: "weather",
  icon: <FaCloudSun size={34} color="white" />,
},
{
  name: "calendar",
  icon: <FaCalendarAlt size={34} color="white" />,
},
{
  name: "settings",
  icon: <FaCog size={34} color="white" />,
},

  ]

  return (

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">

      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl px-8 py-4 flex gap-8 shadow-2xl">

        {dockApps.map((app) => (

          <div
            key={app.name}
            className="flex flex-col items-center"
          >

            <motion.button

              whileHover={{
                scale: 1.4,
                y: -10,
              }}

              whileTap={{
                scale: 1.2,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
              }}

              onClick={() => openWindow(app.name)}

              className="relative"

            >

              {app.icon}

            </motion.button>

            {/* ACTIVE INDICATOR */}
            {
              windows[app.name] && (

                <div className="w-2 h-2 rounded-full bg-white mt-2"></div>

              )
            }

          </div>

        ))}

      </div>

    </div>

  )
}

export default Dock