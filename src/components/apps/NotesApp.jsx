import { useEffect, useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import useNotificationStore from "../../store/useNotificationStore"

function NotesApp() {
  const { closeWindow } = useWindowStore()
  const { addNotification } = useNotificationStore()

  const [note, setNote] = useState("")

  useEffect(() => {
    const savedNote = localStorage.getItem("dharunika-note")
    if (savedNote) setNote(savedNote)
  }, [])

  function saveNote() {
    localStorage.setItem("dharunika-note", note)

    addNotification({
      title: "Notes",
      message: "Note saved successfully",
    })
  }

  function clearNote() {
    setNote("")
    localStorage.removeItem("dharunika-note")

    addNotification({
      title: "Notes",
      message: "Note cleared",
    })
  }

  return (
    <Window
      title="Notes"
      closeWindow={() => closeWindow("notes")}
      windowName="notes"
    >
      <div className="h-[550px] flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-bold mb-2">Notes</h1>
          <p className="text-gray-400">
            Write quick thoughts, interview points, or project ideas.
          </p>
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Start typing your note..."
          className="
            flex-1
            w-full
            resize-none
            bg-yellow-100
            text-black
            rounded-3xl
            p-6
            text-lg
            outline-none
            leading-8
          "
        />

        <div className="flex gap-4">
          <button
            onClick={saveNote}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl"
          >
            Save Note
          </button>

          <button
            onClick={clearNote}
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl"
          >
            Clear
          </button>
        </div>
      </div>
    </Window>
  )
}

export default NotesApp