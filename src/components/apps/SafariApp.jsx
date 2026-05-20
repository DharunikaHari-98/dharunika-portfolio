import { useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFilePdf,
  FaArrowLeft,
  FaArrowRight,
  FaRedo,
} from "react-icons/fa"

function SafariApp() {
  const { closeWindow, openWindow } = useWindowStore()

  const tabs = [
    {
      name: "Home",
      url: "https://dharunika.dev",
      type: "home",
    },
    {
      name: "GitHub",
      url: "https://github.com/DharunikaHari-98",
      type: "github",
    },
    {
      name: "LinkedIn",
      url:  "https://linkedin.com/in/dharunika-hari",
      type: "linkedin",
    },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <Window
      title="Safari"
      closeWindow={() => closeWindow("safari")}
      windowName="safari"
    >
      <div className="h-[600px] flex flex-col bg-[#0f172a] rounded-3xl overflow-hidden border border-white/10">
        <div className="bg-black/60 border-b border-gray-700 p-4">
          <div className="flex gap-3 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-5
                  py-2
                  rounded-xl
                  text-sm
                  transition
                  ${
                    activeTab.name === tab.name
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <FaArrowLeft className="text-gray-400" />
            <FaArrowRight className="text-gray-400" />
            <FaRedo className="text-gray-400" />

            <div className="flex-1 bg-white/10 rounded-2xl px-5 py-3 text-gray-300">
              {activeTab.url}
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab.type === "home" && (
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Dharunika Portfolio
              </h1>

              <p className="text-gray-400 text-xl mb-10">
                Full Stack Developer • Amazon Intern • AI Enthusiast
              </p>

              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={() => openWindow("github")}
                  className="bg-white/10 border border-white/10 rounded-3xl p-8 text-left hover:bg-white/20 transition"
                >
                  <FaGithub size={48} className="mb-5" />
                  <h2 className="text-2xl font-bold mb-2">GitHub</h2>
                  <p className="text-gray-400">
                    View live repositories and projects.
                  </p>
                </button>

                <button
                  onClick={() => openWindow("resume")}
                  className="bg-white/10 border border-white/10 rounded-3xl p-8 text-left hover:bg-white/20 transition"
                >
                  <FaFilePdf size={48} className="text-red-400 mb-5" />
                  <h2 className="text-2xl font-bold mb-2">Resume</h2>
                  <p className="text-gray-400">
                    Open resume inside the portfolio OS.
                  </p>
                </button>

                <button
                  onClick={() => openWindow("contact")}
                  className="bg-white/10 border border-white/10 rounded-3xl p-8 text-left hover:bg-white/20 transition"
                >
                  <FaLinkedin size={48} className="text-blue-400 mb-5" />
                  <h2 className="text-2xl font-bold mb-2">Contact</h2>
                  <p className="text-gray-400">
                    Recruiters can reach me quickly.
                  </p>
                </button>

                <button
                  onClick={() => openWindow("finder")}
                  className="bg-white/10 border border-white/10 rounded-3xl p-8 text-left hover:bg-white/20 transition"
                >
                  <FaGlobe size={48} className="text-cyan-400 mb-5" />
                  <h2 className="text-2xl font-bold mb-2">Projects</h2>
                  <p className="text-gray-400">
                    Explore projects like files in Finder.
                  </p>
                </button>
              </div>
            </div>
          )}

          {activeTab.type === "github" && (
            <div className="text-center py-20">
              <FaGithub size={90} className="mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">GitHub Profile</h1>
              <p className="text-gray-400 mb-8">
                Open the GitHub app for live repository data.
              </p>
              <button
                onClick={() => openWindow("github")}
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl"
              >
                Open GitHub App
              </button>
            </div>
          )}

          {activeTab.type === "linkedin" && (
            <div className="text-center py-20">
              <FaLinkedin size={90} className="mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl font-bold mb-4">LinkedIn</h1>
              <p className="text-gray-400 mb-8">
                Add your real LinkedIn URL here before deployment.
              </p>
              <button
                onClick={() => openWindow("contact")}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-2xl"
              >
                Open Contact App
              </button>
            </div>
          )}
        </div>
      </div>
    </Window>
  )
}

export default SafariApp