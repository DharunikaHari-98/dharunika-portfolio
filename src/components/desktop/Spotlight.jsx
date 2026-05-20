import { useState } from "react"
import { motion } from "framer-motion"
import useWindowStore from "../../store/useWindowStore"

function Spotlight({ closeSpotlight }) {
  const { openWindow } = useWindowStore()

  const apps = [
    { name: "About", window: "about" },
    { name: "Finder", window: "finder" },
    { name: "Terminal", window: "terminal" },
    { name: "Safari", window: "safari" },
    { name: "VS Code", window: "vscode" },
    { name: "GitHub", window: "github" },
    { name: "Resume", window: "resume" },
    { name: "Contact", window: "contact" },
    { name: "App Store", window: "appstore" },
    { name: "Music", window: "music" },
    { name: "Notes", window: "notes" },
    { name: "Weather", window: "weather" },
    { name: "Calendar", window: "calendar" },
    { name: "Settings", window: "settings" },
  ]

  const [query, setQuery] = useState("")

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 bg-black/30 backdrop-blur-xl z-[9999] flex justify-center pt-40"
    >
      <div className="w-[700px] h-[500px] bg-[#1f2937]/95 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
        <div className="border-b border-gray-700 p-5">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Spotlight Search"
            className="w-full bg-transparent outline-none text-2xl text-white"
          />
        </div>

        <div className="p-4">
          {filteredApps.map((app) => (
            <button
              key={app.window}
              onClick={() => {
                openWindow(app.window)
                closeSpotlight()
              }}
              className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10 transition text-white text-lg"
            >
              {app.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Spotlight