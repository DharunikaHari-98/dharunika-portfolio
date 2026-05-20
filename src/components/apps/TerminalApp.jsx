import { useState } from "react"

import Window from "../windows/Window"

import useWindowStore from "../../store/useWindowStore"

import useNotificationStore from "../../store/useNotificationStore"

function TerminalApp() {

  const { closeWindow } = useWindowStore()

  const { addNotification } =
    useNotificationStore()

  const [input, setInput] = useState("")

  const [history, setHistory] = useState([

    "Welcome to Dharunika OS Terminal 🚀",

    "Type 'help' to see commands.",

  ])

  const commands = {

    help: `
Available Commands:

about
skills
projects
github
linkedin
resume
clear
date
whoami
`,

    about: `
Hi, I'm Dharunika 👋

Amazon Intern
Full Stack Developer
AI Enthusiast
`,

    skills: `
Skills:

React
Java
Spring Boot
MongoDB
Tailwind CSS
AI/ML
Git & GitHub
`,

    projects: `
Projects:

• AI Women Safety System
• Crime Visualization Dashboard
• Policy Trust Management
• macOS Portfolio
`,

    github: `
GitHub:
https://github.com
`,

    linkedin: `
LinkedIn:
https://linkedin.com
`,

    resume: `
Resume:
Dharunika_Resume.pdf
`,

    whoami: `
dharunika@amazon-intern
`,

    date: `
${new Date().toString()}
`,
  }

  function runCommand(command) {

    // EMPTY INPUT
    if (!command.trim()) return

    // CLEAR
    if (command === "clear") {

      setHistory([])

      addNotification({

        title: "Terminal",

        message:
          "Terminal history cleared",

      })

      return
    }

    const result =
      commands[command] ||
      `Command not found: ${command}`

    // UPDATE TERMINAL
    setHistory((prev) => [

      ...prev,

      `> ${command}`,

      result,

    ])

    // SHOW NOTIFICATION
    addNotification({

      title: "Terminal",

      message:
        `Executed command: ${command}`,

    })
  }

  return (

    <Window
      title="Terminal"
      closeWindow={() => closeWindow("terminal")}
      windowName="terminal"
    >

      <div className="
        bg-black
        rounded-2xl
        p-6
        h-[500px]
        overflow-y-auto
        font-mono
        border
        border-green-500/20
      ">

        {/* HISTORY */}
        <div className="space-y-3 mb-6">

          {
            history.map((line, index) => (

              <pre
                key={index}
                className="
                  text-green-400
                  whitespace-pre-wrap
                  leading-7
                "
              >

                {line}

              </pre>

            ))
          }

        </div>

        {/* INPUT */}
        <div className="flex items-center gap-3">

          <span className="text-green-400">

            dharunika@mac ~

          </span>

          <span className="text-purple-400">

            $

          </span>

          <input

            value={input}

            onChange={(e) =>
              setInput(e.target.value)
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                runCommand(input)

                setInput("")
              }
            }}

            autoFocus

            spellCheck={false}

            className="
              bg-transparent
              outline-none
              flex-1
              text-green-400
              caret-green-400
            "

          />

        </div>

      </div>

    </Window>

  )
}

export default TerminalApp