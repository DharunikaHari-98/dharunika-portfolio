import { useState } from "react"
import { FaApple, FaWifi, FaBatteryFull, FaSlidersH } from "react-icons/fa"
import ControlCenter from "../system/ControlCenter"

function TopBar() {
  const [showControl, setShowControl] = useState(false)

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-10 bg-white/20 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 text-white z-50">
        <div className="flex items-center gap-6">
          <FaApple />
          <p className="font-semibold">Dharunika's Portfolio</p>
          <p>Projects</p>
          <p>Resume</p>
        </div>

        <div className="flex items-center gap-5">
          <FaWifi />
          <FaBatteryFull />

          <button onClick={() => setShowControl(!showControl)}>
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