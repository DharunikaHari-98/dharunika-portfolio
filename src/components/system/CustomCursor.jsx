import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    function moveCursor(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    function handleMouseOver(e) {
      const target = e.target

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: hovering ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-[999999]
        w-8
        h-8
        rounded-full
        border
        border-purple-400
        bg-purple-500/20
        backdrop-blur-sm
      "
    />
  )
}

export default CustomCursor