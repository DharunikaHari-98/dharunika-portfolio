import { useRef, useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import useNotificationStore from "../../store/useNotificationStore"
import { FaPlay, FaPause } from "react-icons/fa"

function MusicApp() {
  const { closeWindow } = useWindowStore()
  const { addNotification } = useNotificationStore()

  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const song = {
    title: "Ambient Lofi",
    artist: "Dharunika OS",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  }

  function togglePlay() {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)

      addNotification({
        title: "Music",
        message: `Now Playing: ${song.title}`,
      })
    }
  }

  return (
    <Window
      title="Music"
      closeWindow={() => closeWindow("music")}
      windowName="music"
    >
      <div className="h-[520px] flex flex-col items-center justify-center text-center">
        <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl mb-8 flex items-center justify-center text-6xl">
          🎵
        </div>

        <h1 className="text-4xl font-bold mb-3">
          {song.title}
        </h1>

        <p className="text-gray-400 text-xl mb-8">
          {song.artist}
        </p>

        <button
          onClick={togglePlay}
          className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
        >
          {playing ? <FaPause size={28} /> : <FaPlay size={28} />}
        </button>

        <audio ref={audioRef} src={song.url} />
      </div>
    </Window>
  )
}

export default MusicApp