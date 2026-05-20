import { useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"

import useNotificationStore from "../../store/useNotificationStore"

function NotificationCenter() {

  const {
    notifications,
    removeNotification,
  } = useNotificationStore()

  useEffect(() => {

    notifications.forEach((notification) => {

      setTimeout(() => {

        removeNotification(notification.id)

      }, 4000)

    })

  }, [notifications])

  return (

    <div className="absolute top-6 right-6 z-[99999] flex flex-col gap-4">

      <AnimatePresence>

        {
          notifications.map((notification) => (

            <motion.div

              key={notification.id}

              initial={{
                opacity: 0,
                x: 100,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              exit={{
                opacity: 0,
                x: 100,
              }}

              className="
                w-[340px]
                bg-[#1f2937]/90
                backdrop-blur-2xl
                border
                border-white/10
                rounded-3xl
                p-5
                shadow-2xl
              "
            >

              <h2 className="text-white font-bold text-lg">

                {notification.title}

              </h2>

              <p className="text-gray-300 mt-2">

                {notification.message}

              </p>

            </motion.div>

          ))
        }

      </AnimatePresence>

    </div>

  )
}

export default NotificationCenter