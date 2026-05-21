import {
  FaFolder,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa"

import useWindowStore from "../../store/useWindowStore"

function DesktopIcons() {

  const { openWindow } = useWindowStore()

  const icons = [

    {
      title: "Projects",
      icon: <FaFolder size={42} />,
      action: () => openWindow("finder"),
    },

    {
      title: "About Me",
      icon: <FaFileAlt size={42} />,
      action: () => openWindow("about"),
    },

    {
      title: "Terminal",
      icon: <FaGithub size={42} />,
      action: () => openWindow("terminal"),
    },

  ]

  return (

    <div className="absolute top-20 left-8 flex flex-col gap-8 z-10">

      {icons.map((item, index) => (

        <div
          key={index}

          onDoubleClick={item.action}

          className="flex flex-col items-center gap-3 cursor-pointer group w-24"
        >

          <div className="text-white group-hover:scale-110 transition duration-300">

            {item.icon}

          </div>

          <p className="text-white text-sm text-center bg-black/30 px-2 py-1 rounded-lg backdrop-blur-md">

            {item.title}

          </p>

        </div>

      ))}

    </div>

  )
}

export default DesktopIcons