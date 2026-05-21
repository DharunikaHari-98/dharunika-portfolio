import { useEffect, useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import useNotificationStore from "../../store/useNotificationStore"

function CalendarApp() {
  const { closeWindow } = useWindowStore()
  const { addNotification } = useNotificationStore()

  const today = new Date()

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  )

  const [selectedDate, setSelectedDate] = useState(today)
  const [eventText, setEventText] = useState("")
  const [events, setEvents] = useState({})

  useEffect(() => {
    const savedEvents = localStorage.getItem("calendar-events")
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents))
    }
  }, [])

  function saveEvents(updatedEvents) {
    setEvents(updatedEvents)
    localStorage.setItem("calendar-events", JSON.stringify(updatedEvents))
  }

  function getDateKey(date) {
    return date.toISOString().split("T")[0]
  }

  function addEvent() {
    if (!eventText.trim()) {
      addNotification({
        title: "Calendar",
        message: "Please enter an event first.",
      })
      return
    }

    const key = getDateKey(selectedDate)

    const updatedEvents = {
      ...events,
      [key]: [...(events[key] || []), eventText],
    }

    saveEvents(updatedEvents)
    setEventText("")

    addNotification({
      title: "Calendar",
      message: "Event added successfully.",
    })
  }

  function deleteEvent(index) {
    const key = getDateKey(selectedDate)

    const updatedList = events[key].filter((_, i) => i !== index)

    const updatedEvents = {
      ...events,
      [key]: updatedList,
    }

    if (updatedList.length === 0) {
      delete updatedEvents[key]
    }

    saveEvents(updatedEvents)
  }

  function previousMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    )
  }

  function nextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
  }

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  })

  const firstDayIndex = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const calendarDays = []

  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day))
  }

  const selectedKey = getDateKey(selectedDate)
  const selectedEvents = events[selectedKey] || []

  return (
    <Window
      title="Calendar"
      closeWindow={() => closeWindow("calendar")}
      windowName="calendar"
    >
      <div className="h-[560px] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              {monthName} {year}
            </h1>

            <p className="text-gray-400 mt-2">
              Today: {today.toDateString()}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={previousMonth}
              className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-2xl"
            >
              ←
            </button>

            <button
              onClick={() =>
                setCurrentDate(
                  new Date(today.getFullYear(), today.getMonth(), 1)
                )
              }
              className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-2xl"
            >
              Today
            </button>

            <button
              onClick={nextMonth}
              className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-2xl"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-3 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-gray-400 font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3 mb-8">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={index} className="h-16" />
            }

            const key = getDateKey(date)

            const isToday =
              date.toDateString() === today.toDateString()

            const isSelected =
              date.toDateString() === selectedDate.toDateString()

            const hasEvent = events[key]?.length > 0

            return (
              <button
                key={key}
                onClick={() => setSelectedDate(date)}
                className={`
                  h-16
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  transition
                  border
                  ${
                    isSelected
                      ? "bg-purple-600 border-purple-400"
                      : "bg-white/10 border-white/10 hover:bg-white/20"
                  }
                  ${isToday ? "ring-2 ring-yellow-400" : ""}
                `}
              >
                <span>{date.getDate()}</span>

                {hasEvent && (
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-1"></span>
                )}
              </button>
            )
          })}
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-2">
            {selectedDate.toDateString()}
          </h2>

          <p className="text-gray-400 mb-5">
            Add reminders, interview dates, tasks, or project deadlines.
          </p>

          <div className="flex gap-3 mb-6">
            <input
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Add event..."
              className="flex-1 bg-black/40 border border-gray-700 rounded-2xl p-4 outline-none text-white"
            />

            <button
              onClick={addEvent}
              className="bg-purple-600 hover:bg-purple-700 px-6 rounded-2xl font-semibold"
            >
              Add
            </button>
          </div>

          <div className="space-y-3">
            {selectedEvents.length === 0 ? (
              <p className="text-gray-500">No events for this date.</p>
            ) : (
              selectedEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-black/30 rounded-2xl px-5 py-4"
                >
                  <p>{event}</p>

                  <button
                    onClick={() => deleteEvent(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Window>
  )
}

export default CalendarApp