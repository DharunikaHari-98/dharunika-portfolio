import { useState } from "react"

import Window from "../windows/Window"

import useWindowStore from "../../store/useWindowStore"

import {
  FaReact,
  FaJs,
  FaFolder,
} from "react-icons/fa"

function VSCodeApp() {

  const { closeWindow } = useWindowStore()

  const files = {

    "App.jsx": `
function App() {

  return (
    <div>
      <h1>
        Dharunika Portfolio
      </h1>
    </div>
  )
}

export default App
`,

    "Hero.jsx": `
function Hero() {

  return (

    <section>

      <h1>
        Amazon Intern
      </h1>

    </section>

  )
}

export default Hero
`,

    "tailwind.config.js": `
export default {

  theme: {
    extend: {},
  },

  plugins: [],
}
`,
  }

  const [selectedFile, setSelectedFile] =
    useState("App.jsx")

  return (

    <Window
      title="VS Code"
      closeWindow={() => closeWindow("vscode")}
      windowName="vscode"
    >

      <div className="flex h-[600px] bg-[#1e1e1e] text-white rounded-2xl overflow-hidden">

        {/* SIDEBAR */}
        <div className="w-64 bg-[#181818] border-r border-gray-800">

          <div className="p-4 border-b border-gray-800 flex items-center gap-3">

            <FaFolder />

            <p className="font-semibold">
              PORTFOLIO
            </p>

          </div>

          <div className="p-3 space-y-2">

            {
              Object.keys(files).map((file) => (

                <button
                  key={file}

                  onClick={() =>
                    setSelectedFile(file)
                  }

                  className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-3
                    py-2
                    rounded-lg
                    text-left
                    transition

                    ${
                      selectedFile === file
                        ? "bg-[#2d2d2d]"
                        : "hover:bg-[#252526]"
                    }
                  `}
                >

                  {
                    file.endsWith(".jsx")
                      ? <FaReact className="text-cyan-400" />
                      : <FaJs className="text-yellow-400" />
                  }

                  {file}

                </button>

              ))
            }

          </div>

        </div>

        {/* EDITOR */}
        <div className="flex-1 flex flex-col">

          {/* TAB BAR */}
          <div className="h-12 bg-[#252526] border-b border-gray-800 flex items-center px-4">

            <div className="bg-[#1e1e1e] px-4 py-2 rounded-t-lg text-sm">

              {selectedFile}

            </div>

          </div>

          {/* CODE AREA */}
          <div className="flex-1 overflow-auto p-6 font-mono text-sm leading-7">

            <pre className="text-green-400 whitespace-pre-wrap">

              {files[selectedFile]}

            </pre>

          </div>

        </div>

      </div>

    </Window>

  )
}

export default VSCodeApp