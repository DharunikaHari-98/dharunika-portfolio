import { useState } from "react"

import Window from "../windows/Window"

import useWindowStore from "../../store/useWindowStore"

import filesystem from "../../data/filesystem"

import {
  FaFolder,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa"

function FinderApp() {

  const { closeWindow } = useWindowStore()

  const [currentFolder, setCurrentFolder] =
    useState(filesystem.Desktop)

  const [path, setPath] =
    useState(["Desktop"])

  const [selectedItem, setSelectedItem] =
    useState(null)

  function openFolder(name, value) {

    if (
      typeof value === "object" &&
      !value.type
    ) {

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

  return (

    <Window
      title="Finder"
      closeWindow={() => closeWindow("finder")}
      windowName="finder"
    >

      <div className="flex h-[600px]">

        {/* SIDEBAR */}
        <div className="w-56 border-r border-gray-700 bg-black/20 p-5">

          <h2 className="text-xl font-bold mb-6">
            Favorites
          </h2>

          <div className="space-y-4">

            <button
              onClick={() => {

                setCurrentFolder(
                  filesystem.Desktop
                )

                setPath(["Desktop"])
              }}

              className="block hover:text-purple-400 transition"
            >

              Desktop

            </button>

          </div>

        </div>

        {/* MAIN */}
        <div className="flex-1 flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b border-gray-700 px-6 py-4">

            <div className="flex items-center gap-4">

              <button
                onClick={goBack}
                className="bg-white/10 px-4 py-2 rounded-xl hover:bg-white/20 transition"
              >

                ← Back

              </button>

              <p className="text-gray-400">

                {path.join(" / ")}

              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div className="flex flex-1">

            {/* FILES */}
            <div className="flex-1 p-6 grid grid-cols-3 gap-8 overflow-y-auto">

              {
                Object.entries(currentFolder).map(
                  ([name, value]) => (

                    <div
                      key={name}

                      onDoubleClick={() =>
                        openFolder(name, value)
                      }

                      onClick={() =>
                        setSelectedItem({
                          name,
                          ...value,
                        })
                      }

                      className="flex flex-col items-center cursor-pointer hover:scale-105 transition p-4 rounded-2xl hover:bg-white/10"
                    >

                      {
                        value.type === "file"
                          ? (
                            <FaFileAlt
                              size={55}
                              className="text-white"
                            />
                          )
                          : (
                            <FaFolder
                              size={55}
                              className="text-yellow-400"
                            />
                          )
                      }

                      <p className="mt-4 text-center">

                        {name}

                      </p>

                    </div>

                  )
                )
              }

            </div>

            {/* PREVIEW PANEL */}
            <div className="w-72 border-l border-gray-700 bg-black/20 p-6">

              {
                selectedItem ? (

                  <div>

                    <h2 className="text-2xl font-bold mb-6">

                      {selectedItem.name}

                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6">

                      {selectedItem.description}

                    </p>

                    {
                      selectedItem.tech && (

                        <div className="mb-6">

                          <h3 className="font-semibold mb-2">

                            Tech Stack

                          </h3>

                          <p className="text-purple-400">

                            {selectedItem.tech}

                          </p>

                        </div>

                      )
                    }

                    {
                      selectedItem.github && (

                        <a
                          href={selectedItem.github}
                          target="_blank"
                          className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-2xl hover:bg-white/20 transition"
                        >

                          <FaGithub />

                          GitHub Repo

                        </a>

                      )
                    }

                  </div>

                ) : (

                  <p className="text-gray-500">

                    Select a file or folder.

                  </p>

                )
              }

            </div>

          </div>

        </div>

      </div>

    </Window>

  )
}

export default FinderApp