import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import { FaCloudSun, FaWind, FaTint } from "react-icons/fa"

function WeatherApp() {
  const { closeWindow } = useWindowStore()

  return (
    <Window
      title="Weather"
      closeWindow={() => closeWindow("weather")}
      windowName="weather"
    >
      <div className="h-[520px] bg-gradient-to-br from-blue-500 to-purple-700 rounded-3xl p-8 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-bold">Chennai</h1>
            <p className="text-xl mt-2 text-white/80">Partly Cloudy</p>
          </div>

          <FaCloudSun size={90} />
        </div>

        <div className="mt-14">
          <h2 className="text-8xl font-bold">29°C</h2>
          <p className="text-xl mt-3 text-white/80">
            Feels like 31°C
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-14">
          <div className="bg-white/20 rounded-3xl p-6 backdrop-blur-xl">
            <FaWind size={28} />
            <p className="mt-3 text-lg">Wind</p>
            <h3 className="text-2xl font-bold">12 km/h</h3>
          </div>

          <div className="bg-white/20 rounded-3xl p-6 backdrop-blur-xl">
            <FaTint size={28} />
            <p className="mt-3 text-lg">Humidity</p>
            <h3 className="text-2xl font-bold">74%</h3>
          </div>
        </div>
      </div>
    </Window>
  )
}

export default WeatherApp