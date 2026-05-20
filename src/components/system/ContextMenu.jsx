import useWindowStore from "../../store/useWindowStore"

function ContextMenu({
  x,
  y,
  closeMenu,
}) {

  const { openWindow } = useWindowStore()

  const menuItems = [

    {
      label: "Open Finder",
      action: () => openWindow("finder"),
    },

    {
      label: "Open Terminal",
      action: () => openWindow("terminal"),
    },

    {
      label: "Open VS Code",
      action: () => openWindow("vscode"),
    },

    {
      label: "System Settings",
      action: () => openWindow("settings"),
    },

    {
      label: "Refresh",
      action: () =>
        window.location.reload(),
    },

  ]

  return (

    <div

      style={{
        top: y,
        left: x,
      }}

      className="
        absolute
        z-[99999]
        w-64
        bg-[#1f2937]/95
        backdrop-blur-2xl
        border
        border-white/10
        rounded-2xl
        overflow-hidden
        shadow-2xl
      "
    >

      {
        menuItems.map((item, index) => (

          <button

            key={index}

            onClick={() => {

              item.action()

              closeMenu()
            }}

            className="
              w-full
              text-left
              px-5
              py-4
              text-white
              hover:bg-white/10
              transition
            "
          >

            {item.label}

          </button>

        ))
      }

    </div>

  )
}

export default ContextMenu