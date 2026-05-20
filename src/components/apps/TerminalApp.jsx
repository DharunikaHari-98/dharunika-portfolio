import { useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import useNotificationStore from "../../store/useNotificationStore"

function TerminalApp() {
  const { closeWindow, openWindow } = useWindowStore()
  const { addNotification } = useNotificationStore()

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
whoami
date
clear

ls
pwd
cd projects
ls projects
cat about
cat resume

open about
open finder
open safari
open vscode
open music
open notes
open weather
open calendar
open settings
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
https://github.com/DharunikaHari-98
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
dharunika@macos-portfolio
`,

    date: `
${new Date().toString()}
`,
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase()

    if (!command) return

    if (command === "clear") {
      setHistory([])

      addNotification({
        title: "Terminal",
        message: "Terminal history cleared",
      })

      return
    }

    if (command === "ls") {
      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        "about.txt  skills.txt  projects  resume.pdf",
      ])
      return
    }

    if (command === "pwd") {
      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        "/Users/dharunika/portfolio",
      ])
      return
    }

    if (command === "cd projects") {
      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        "Moved to /projects\nType 'ls projects' to view projects.",
      ])
      return
    }

    if (command === "ls projects") {
      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        "AI-Women-Safety  Crime-Dashboard  Policy-Trust  macOS-Portfolio",
      ])
      return
    }

    if (command === "cat about") {
      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        commands.about,
      ])
      return
    }

    if (command === "cat resume") {
      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        "Resume preview will be connected soon.",
      ])
      return
    }

    if (command.startsWith("open ")) {
      const appName = command.replace("open ", "").trim()

      const appMap = {
        about: "about",
        finder: "finder",
        terminal: "terminal",
        safari: "safari",
        vscode: "vscode",
        music: "music",
        notes: "notes",
        weather: "weather",
        calendar: "calendar",
        settings: "settings",
      }

      if (appMap[appName]) {
        openWindow(appMap[appName])

        setHistory((prev) => [
          ...prev,
          `> ${rawCommand}`,
          `Opening ${appName}...`,
        ])

        addNotification({
          title: "Terminal",
          message: `Opening ${appName}`,
        })

        return
      }

      setHistory((prev) => [
        ...prev,
        `> ${rawCommand}`,
        `App not found: ${appName}`,
      ])

      return
    }

    const result =
      commands[command] ||
      `Command not found: ${rawCommand}

Type 'help' to see available commands.`

    setHistory((prev) => [
      ...prev,
      `> ${rawCommand}`,
      result,
    ])

    addNotification({
      title: "Terminal",
      message: `Executed command: ${rawCommand}`,
    })
  }

  return (
    <Window
      title="Terminal"
      closeWindow={() => closeWindow("terminal")}
      windowName="terminal"
    >
      <div className="bg-black rounded-2xl p-6 h-[500px] overflow-y-auto font-mono border border-green-500/20">
        <div className="space-y-3 mb-6">
          {history.map((line, index) => (
            <pre
              key={index}
              className="text-green-400 whitespace-pre-wrap leading-7"
            >
              {line}
            </pre>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400">
            dharunika@mac
          </span>

          <span className="text-purple-400">$</span>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand(input)
                setInput("")
              }
            }}
            autoFocus
            spellCheck={false}
            className="bg-transparent outline-none flex-1 text-green-400 caret-green-400"
          />
        </div>
      </div>
    </Window>
  )
}

export default TerminalApp