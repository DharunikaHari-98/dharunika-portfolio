import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"

function CalendarApp() {
  const { closeWindow } = useWindowStore()

  const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
  ]

  const dates = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <Window
      title="Calendar"
      closeWindow={() => closeWindow("calendar")}
      windowName="calendar"
    >
      <div className="h-[540px]">
        <h1 className="text-4xl font-bold mb-2">Calendar</h1>
        <p className="text-gray-400 mb-8">May 2026</p>

        <div className="grid grid-cols-7 gap-3 mb-4">
          {days.map((day) => (
            <div key={day} className="text-center text-gray-400">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3">
          {dates.map((date) => (
            <div
              key={date}
              className={`
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                bg-white/10
                hover:bg-purple-600
                transition
                ${date === 20 ? "bg-purple-600" : ""}
              `}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </Window>
  )
}

export default CalendarApp