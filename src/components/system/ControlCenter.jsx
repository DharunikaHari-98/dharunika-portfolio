import useThemeStore from "../../store/useThemeStore"

function ControlCenter({ close }) {
  const { darkMode, toggleTheme } = useThemeStore()

  return (
    <div className="absolute top-12 right-6 z-[9999] w-80 bg-[#1f2937]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 text-white shadow-2xl">
      <h2 className="text-xl font-bold mb-5">Control Center</h2>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20">
          WiFi<br />On
        </button>

        <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20">
          Bluetooth<br />On
        </button>

        <button
          onClick={toggleTheme}
          className="bg-white/10 rounded-2xl p-4 hover:bg-white/20"
        >
          Theme<br />{darkMode ? "Dark" : "Light"}
        </button>

        <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20">
          Focus<br />Off
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2">Brightness</p>
          <input type="range" className="w-full" />
        </div>

        <div>
          <p className="mb-2">Volume</p>
          <input type="range" className="w-full" />
        </div>
      </div>

      <button
        onClick={close}
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 rounded-2xl py-3"
      >
        Close
      </button>
    </div>
  )
}

export default ControlCenter