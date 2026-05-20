import { useEffect, useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import {
  FaCloudSun,
  FaCloudMoon,
  FaSun,
  FaMoon,
  FaCloudRain,
  FaWind,
  FaTint,
  FaMapMarkerAlt,
} from "react-icons/fa"

function WeatherApp() {
  const { closeWindow } = useWindowStore()

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Detecting location...")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  function getWeatherInfo(code, isDay) {
    if (code === 0) {
      return {
        text: "Clear sky",
        icon: isDay ? <FaSun size={90} /> : <FaMoon size={90} />,
      }
    }

    if ([1, 2, 3].includes(code)) {
      return {
        text: "Mostly cloudy",
        icon: isDay ? <FaCloudSun size={90} /> : <FaCloudMoon size={90} />,
      }
    }

    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
      return {
        text: "Rainy",
        icon: <FaCloudRain size={90} />,
      }
    }

    return {
      text: "Cloudy",
      icon: isDay ? <FaCloudSun size={90} /> : <FaCloudMoon size={90} />,
    }
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setCity("Chennai")
      setWeather({
        temperature_2m: 29,
        relative_humidity_2m: 74,
        wind_speed_10m: 12,
        weather_code: 2,
        is_day: 0,
        time: new Date().toISOString(),
      })
      setError("Location is not supported. Showing default weather.")
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,is_day&timezone=auto`
          )

          const weatherData = await weatherRes.json()

          const locationRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )

          const locationData = await locationRes.json()

          const detectedCity =
            locationData.city ||
            locationData.locality ||
            locationData.principalSubdivision ||
            "Your Location"

          setWeather(weatherData.current)
          setCity(detectedCity)
        } catch (err) {
          setCity("Chennai")
          setWeather({
            temperature_2m: 29,
            relative_humidity_2m: 74,
            wind_speed_10m: 12,
            weather_code: 2,
            is_day: 0,
            time: new Date().toISOString(),
          })
          setError("Unable to fetch live weather. Showing default weather.")
        } finally {
          setLoading(false)
        }
      },
      () => {
        setCity("Chennai")
        setWeather({
          temperature_2m: 29,
          relative_humidity_2m: 74,
          wind_speed_10m: 12,
          weather_code: 2,
          is_day: 0,
          time: new Date().toISOString(),
        })
        setError("Location permission denied. Showing default weather.")
        setLoading(false)
      }
    )
  }, [])

  const info = weather
    ? getWeatherInfo(weather.weather_code, weather.is_day === 1)
    : null

  return (
    <Window
      title="Weather"
      closeWindow={() => closeWindow("weather")}
      windowName="weather"
    >
      <div className="h-[520px] bg-gradient-to-br from-blue-500 to-purple-700 rounded-3xl p-8 text-white">
        {loading || !weather ? (
          <div className="h-full flex items-center justify-center text-2xl">
            Fetching live weather...
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-5xl font-bold flex items-center gap-3">
                  <FaMapMarkerAlt size={36} />
                  {city}
                </h1>

                <p className="text-xl mt-3 text-white/80">
                  {info.text} • {weather.is_day === 1 ? "Day" : "Night"}
                </p>

                {error && (
                  <p className="text-sm mt-3 text-yellow-200">{error}</p>
                )}
              </div>

              {info.icon}
            </div>

            <div className="mt-14">
              <h2 className="text-8xl font-bold">
                {Math.round(weather.temperature_2m)}°C
              </h2>

              <p className="text-xl mt-3 text-white/80">
                Updated: {new Date(weather.time).toLocaleTimeString()}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-14">
              <div className="bg-white/20 rounded-3xl p-6 backdrop-blur-xl">
                <FaWind size={28} />
                <p className="mt-3 text-lg">Wind</p>
                <h3 className="text-2xl font-bold">
                  {weather.wind_speed_10m} km/h
                </h3>
              </div>

              <div className="bg-white/20 rounded-3xl p-6 backdrop-blur-xl">
                <FaTint size={28} />
                <p className="mt-3 text-lg">Humidity</p>
                <h3 className="text-2xl font-bold">
                  {weather.relative_humidity_2m}%
                </h3>
              </div>
            </div>
          </>
        )}
      </div>
    </Window>
  )
}

export default WeatherApp