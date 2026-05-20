import { useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import filesystem from "../../data/filesystem"
import {
  FaFolder,
  FaFileAlt,
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
} from "react-icons/fa"

function FinderApp() {
  const { closeWindow, openWindow } = useWindowStore()

  const [currentFolder, setCurrentFolder] = useState(filesystem.Desktop)
  const [path, setPath] = useState(["Desktop"])
  const [selectedItem, setSelectedItem] = useState(null)

  function openFolder(name, value) {
    if (typeof value === "object" && !value.type) {
      setCurrentFolder(value)
      setPath((prev) => [...prev, name])
      setSelectedItem(null)
    }
  }

  function goBack() {
    if (path.length <= 1) return

    const newPath = path.slice(0, -1)

    let folder = filesystem

    for (const p of newPath) {
      folder = folder[p]
    }

    setCurrentFolder(folder)
    setPath(newPath)
    setSelectedItem(null)
  }

  function openSelectedFile(item) {
    if (!item) return

    if (item.name === "Resume") {
      openWindow("resume")
    }

    if (item.name === "Contact") {
      openWindow("contact")
    }
  }

  return (
    <Window
      title="Finder"
      closeWindow={() => closeWindow("finder")}
      windowName="finder"
    >
      <div className="flex h-[600px] bg-[#0f172a] rounded-3xl overflow-hidden border border-white/10">
        {/* LEFT SIDEBAR */}
        <div className="w-64 border-r border-gray-700 bg-black/30 p-6 shrink-0">
          <h2 className="text-xl font-bold mb-6">Favorites</h2>

          <div className="space-y-3">
            <button
              onClick={() => {
                setCurrentFolder(filesystem.Desktop)
                setPath(["Desktop"])
                setSelectedItem(null)
              }}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition"
            >
              Desktop
            </button>

            <button
              onClick={() => {
                setCurrentFolder(filesystem.Desktop.Projects)
                setPath(["Desktop", "Projects"])
                setSelectedItem(null)
              }}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition"
            >
              Projects
            </button>

            <button
              onClick={() => openWindow("resume")}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition"
            >
              Resume
            </button>

            <button
              onClick={() => openWindow("contact")}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition"
            >
              Contact
            </button>
          </div>
        </div>

        {/* MAIN AREA */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* TOP BAR */}
          <div className="h-16 shrink-0 flex items-center justify-between border-b border-gray-700 px-6 bg-black/20">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition"
              >
                ← Back
              </button>

              <p className="text-gray-400">{path.join(" / ")}</p>
            </div>

            <p className="text-gray-500 text-sm">
              {Object.keys(currentFolder).length} items
            </p>
          </div>

          {/* CONTENT AREA */}
          <div className="flex flex-1 min-h-0">
            {/* FILE GRID */}
            <div className="flex-1 p-6 overflow-y-auto min-w-0">
              <div className="grid grid-cols-3 gap-8">
                {Object.entries(currentFolder).map(([name, value]) => (
                  <div
                    key={name}
                    onDoubleClick={() => {
                      if (value.type === "file") {
                        openSelectedFile({ name, ...value })
                      } else {
                        openFolder(name, value)
                      }
                    }}
                    onClick={() =>
                      setSelectedItem({
                        name,
                        ...value,
                      })
                    }
                    className={`
                      flex
                      flex-col
                      items-center
                      justify-center
                      cursor-pointer
                      transition
                      p-5
                      rounded-2xl
                      min-h-[150px]
                      hover:bg-white/10
                      hover:scale-105
                      ${
                        selectedItem?.name === name
                          ? "bg-purple-600/30"
                          : ""
                      }
                    `}
                  >
                    {value.type === "file" ? (
                      <FaFileAlt size={55} className="text-white" />
                    ) : value.type === "project" ? (
                      <FaRocket size={55} className="text-purple-400" />
                    ) : (
                      <FaFolder size={55} className="text-yellow-400" />
                    )}

                    <p className="mt-4 text-center text-sm break-words max-w-[180px]">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PREVIEW */}
            <div className="w-80 shrink-0 border-l border-gray-700 bg-black/30 flex flex-col min-h-0">
              {selectedItem ? (
                <>
                  <div className="flex-1 overflow-y-auto p-6">
                    <h2 className="text-2xl font-bold mb-2 break-words">
                      {selectedItem.name}
                    </h2>

                    {selectedItem.status && (
                      <p className="text-purple-400 mb-4">
                        {selectedItem.status}
                      </p>
                    )}

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    {selectedItem.tech && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Tech Stack</h3>
                        <p className="text-purple-300">{selectedItem.tech}</p>
                      </div>
                    )}

                    {selectedItem.features && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Key Features</h3>

                        <ul className="space-y-2 text-gray-300">
                          {selectedItem.features.map((feature) => (
                            <li key={feature}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="shrink-0 border-t border-gray-700 p-4 bg-black/40 space-y-3">
                    {selectedItem.type === "file" && (
                      <button
                        onClick={() => openSelectedFile(selectedItem)}
                        className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-2xl transition"
                      >
                        Open
                      </button>
                    )}

                    {selectedItem.github && (
                      <a
                        href={selectedItem.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 bg-white/10 px-4 py-3 rounded-2xl hover:bg-white/20 transition"
                      >
                        <FaGithub />
                        GitHub Repo
                      </a>
                    )}

                    {selectedItem.live && (
                      <a
                        href={selectedItem.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 bg-white/10 px-4 py-3 rounded-2xl hover:bg-white/20 transition"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <p className="text-gray-500">
                    Select a file, folder, or project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Window>
  )
}

export default FinderApp