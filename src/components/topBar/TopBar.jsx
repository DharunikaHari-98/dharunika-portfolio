import { useState } from "react"
import {
  FaApple,
  FaWifi,
  FaBatteryFull,
  FaSlidersH,
} from "react-icons/fa"
import ControlCenter from "../system/ControlCenter"

function TopBar() {
  const [showControl, setShowControl] = useState(false)

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-11 bg-black/35 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-6 text-white z-50">
        <div className="flex items-center gap-5">
          <FaApple />
          <p className="font-semibold">Dharunika OS</p>
        </div>

        <div className="flex items-center gap-5">
          <FaWifi />
          <FaBatteryFull />

          <button
            onClick={() => setShowControl(!showControl)}
            className="hover:text-purple-300 transition"
          >
            <FaSlidersH />
          </button>

          <p>{new Date().toLocaleTimeString()}</p>
        </div>
      </div>

      {showControl && (
        <ControlCenter close={() => setShowControl(false)} />
      )}
    </>
  )
}

export default TopBar