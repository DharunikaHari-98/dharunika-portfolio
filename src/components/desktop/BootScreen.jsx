import { motion } from "framer-motion"

import { FaApple } from "react-icons/fa"

function BootScreen() {

  return (

    <motion.div

      initial={{
        opacity: 1,
      }}

      animate={{
        opacity: 1,
      }}

      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >

      {/* APPLE LOGO */}
      <motion.div

        initial={{
          scale: 0.8,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        transition={{
          duration: 1,
        }}

      >

        <FaApple
          size={120}
          className="text-white"
        />

      </motion.div>

      {/* LOADING BAR */}
      <div className="w-[300px] h-2 bg-gray-800 rounded-full overflow-hidden mt-10">

        <motion.div

          initial={{
            width: 0,
          }}

          animate={{
            width: "100%",
          }}

          transition={{
            duration: 3,
          }}

          className="h-full bg-white"

        />

      </div>

    </motion.div>
  )
}

export default BootScreen