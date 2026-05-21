import { useEffect, useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import useNotificationStore from "../../store/useNotificationStore"

function NotesApp() {
  const { closeWindow } = useWindowStore()
  const { addNotification } = useNotificationStore()

  const [notes, setNotes] = useState([])
  const [selectedNoteId, setSelectedNoteId] = useState(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    const savedNotes = localStorage.getItem("portfolio-notes")

    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes)
      setNotes(parsedNotes)

      if (parsedNotes.length > 0) {
        setSelectedNoteId(parsedNotes[0].id)
        setTitle(parsedNotes[0].title)
        setContent(parsedNotes[0].content)
      }
    }
  }, [])

  function saveToLocalStorage(updatedNotes) {
    localStorage.setItem("portfolio-notes", JSON.stringify(updatedNotes))
    setNotes(updatedNotes)
  }

  function createNewNote() {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      content: "",
      updatedAt: new Date().toLocaleString(),
    }

    const updatedNotes = [newNote, ...notes]

    saveToLocalStorage(updatedNotes)
    setSelectedNoteId(newNote.id)
    setTitle(newNote.title)
    setContent(newNote.content)

    addNotification({
      title: "Notes",
      message: "New note created.",
    })
  }

  function selectNote(note) {
    setSelectedNoteId(note.id)
    setTitle(note.title)
    setContent(note.content)
  }

  function saveNote() {
    if (!selectedNoteId) {
      createNewNote()
      return
    }

    const updatedNotes = notes.map((note) =>
      note.id === selectedNoteId
        ? {
            ...note,
            title: title.trim() || "Untitled Note",
            content,
            updatedAt: new Date().toLocaleString(),
          }
        : note
    )

    saveToLocalStorage(updatedNotes)

    addNotification({
      title: "Notes",
      message: "Note saved successfully.",
    })
  }

  function deleteNote() {
    if (!selectedNoteId) return

    const updatedNotes = notes.filter((note) => note.id !== selectedNoteId)

    saveToLocalStorage(updatedNotes)

    if (updatedNotes.length > 0) {
      setSelectedNoteId(updatedNotes[0].id)
      setTitle(updatedNotes[0].title)
      setContent(updatedNotes[0].content)
    } else {
      setSelectedNoteId(null)
      setTitle("")
      setContent("")
    }

    addNotification({
      title: "Notes",
      message: "Note deleted.",
    })
  }

  return (
    <Window
      title="Notes"
      closeWindow={() => closeWindow("notes")}
      windowName="notes"
    >
      <div className="h-[560px] flex bg-[#1f2937] rounded-3xl overflow-hidden border border-white/10">
        <div className="w-72 bg-black/30 border-r border-gray-700 p-4 flex flex-col">
          <button
            onClick={createNewNote}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3 rounded-2xl mb-4"
          >
            + New Note
          </button>

          <div className="flex-1 overflow-y-auto space-y-3">
            {notes.length === 0 ? (
              <p className="text-gray-500 text-sm p-3">
                No notes yet. Create your first note.
              </p>
            ) : (
              notes.map((note) => (
                <button
                  key={note.id}
                  onClick={() => selectNote(note)}
                  className={`
                    w-full
                    text-left
                    p-4
                    rounded-2xl
                    transition
                    ${
                      selectedNoteId === note.id
                        ? "bg-yellow-500 text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }
                  `}
                >
                  <h3 className="font-bold truncate">{note.title}</h3>
                  <p className="text-xs opacity-70 mt-1 truncate">
                    {note.content || "Empty note"}
                  </p>
                  <p className="text-xs opacity-60 mt-2">
                    {note.updatedAt}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="bg-transparent text-3xl font-bold outline-none mb-5 text-white placeholder:text-gray-500"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your note..."
            className="flex-1 bg-yellow-100 text-black rounded-3xl p-6 text-lg outline-none resize-none leading-8"
          />

          <div className="flex justify-between mt-5">
            <button
              onClick={deleteNote}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-2xl font-semibold"
            >
              Delete
            </button>

            <button
              onClick={saveNote}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl font-semibold"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </Window>
  )
}

export default NotesApp