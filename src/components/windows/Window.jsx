import { Rnd } from "react-rnd"
import { motion } from "framer-motion"
import useWindowStore from "../../store/useWindowStore"

function Window({ title, children, closeWindow, windowName }) {
  const {
    focusWindow,
    zIndexes,
    activeWindow,
    minimizeWindow,
    maximizedWindows,
    toggleMaximize,
    minimizedWindows,
  } = useWindowStore()

  if (minimizedWindows[windowName]) return null

  const isMaximized = maximizedWindows[windowName]

  return (
    <Rnd
      default={{
        x: 100,
        y: 80,
        width: 850,
        height: 620,
      }}
      size={
        isMaximized
          ? {
              width: window.innerWidth,
              height: window.innerHeight - 40,
            }
          : undefined
      }
      position={
        isMaximized
          ? {
              x: 0,
              y: 40,
            }
          : undefined
      }
      minWidth={450}
      minHeight={300}
      bounds="window"
      dragHandleClassName="window-drag-handle"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      style={{
        zIndex: zIndexes[windowName],
      }}
      onMouseDown={() => focusWindow(windowName)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={`
          w-full
          h-full
          bg-[#111827]/95
          backdrop-blur-2xl
          overflow-hidden
          shadow-2xl
          border
          flex
          flex-col
          ${
            isMaximized
              ? "rounded-none"
              : "rounded-3xl"
          }
          ${
            activeWindow === windowName
              ? "border-purple-500"
              : "border-gray-700"
          }
        `}
      >
        {/* TITLE BAR */}
        <div
          onDoubleClick={() => toggleMaximize(windowName)}
          className="
            window-drag-handle
            h-14
            bg-black/80
            border-b
            border-gray-700
            flex
            items-center
            px-5
            gap-3
            cursor-move
            select-none
          "
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeWindow()
            }}
            className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-400"
          />

          <button
            onClick={(e) => {
              e.stopPropagation()
              minimizeWindow(windowName)
            }}
            className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-400"
          />

          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleMaximize(windowName)
            }}
            className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-400"
          />

          <p className="text-gray-300 ml-4 text-sm">
            {title}
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto p-8 text-white">
          {children}
        </div>
      </motion.div>
    </Rnd>
  )
}

export default Window