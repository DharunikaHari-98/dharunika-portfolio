import Window from "../windows/Window"

import useWindowStore from "../../store/useWindowStore"

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFilePdf,
} from "react-icons/fa"

function SafariApp() {

  const { closeWindow } = useWindowStore()

  return (

    <Window
      title="Safari"
      closeWindow={() => closeWindow("safari")}
      windowName="safari"
    >

      <div className="h-[600px] flex flex-col">

        {/* BROWSER TOP */}
        <div className="bg-black/40 border border-gray-700 rounded-2xl p-4 flex items-center gap-4 mb-6">

          <div className="flex gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

          </div>

          <div className="flex-1 bg-black/40 rounded-xl px-4 py-2 text-gray-400">

            https://dharunika.dev

          </div>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-6">

          {/* GITHUB */}
          <a
            href="https://github.com"
            target="_blank"
            className="bg-black/40 border border-gray-700 rounded-3xl p-8 hover:bg-white/10 transition duration-300"
          >

            <FaGithub
              size={50}
              className="text-white mb-6"
            />

            <h2 className="text-3xl font-bold mb-4">
              GitHub
            </h2>

            <p className="text-gray-300">
              Explore my repositories and projects.
            </p>

          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="bg-black/40 border border-gray-700 rounded-3xl p-8 hover:bg-white/10 transition duration-300"
          >

            <FaLinkedin
              size={50}
              className="text-blue-400 mb-6"
            />

            <h2 className="text-3xl font-bold mb-4">
              LinkedIn
            </h2>

            <p className="text-gray-300">
              Connect professionally with me.
            </p>

          </a>

          {/* RESUME */}
          <div
            className="bg-black/40 border border-gray-700 rounded-3xl p-8 hover:bg-white/10 transition duration-300 cursor-pointer"
          >

            <FaFilePdf
              size={50}
              className="text-red-400 mb-6"
            />

            <h2 className="text-3xl font-bold mb-4">
              Resume
            </h2>

            <p className="text-gray-300">
              View and download my resume.
            </p>

          </div>

          {/* WEBSITE */}
          <div
            className="bg-black/40 border border-gray-700 rounded-3xl p-8 hover:bg-white/10 transition duration-300 cursor-pointer"
          >

            <FaGlobe
              size={50}
              className="text-cyan-400 mb-6"
            />

            <h2 className="text-3xl font-bold mb-4">
              Portfolio
            </h2>

            <p className="text-gray-300">
              Explore my work and achievements.
            </p>

          </div>

        </div>

      </div>

    </Window>

  )
}

export default SafariApp