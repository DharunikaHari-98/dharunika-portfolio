import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import { FaAmazon, FaLinkedin, FaGithub, FaCode, FaRocket } from "react-icons/fa"

function AboutApp() {
  const { closeWindow, openWindow } = useWindowStore()

  return (
    <Window
      title="About Me"
      closeWindow={() => closeWindow("about")}
      windowName="about"
    >
      <div className="h-[560px] overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Dharunika 👋
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Completed my <span className="text-orange-400 font-semibold">Amazon Pay Software Development Engineer Internship</span>.
            I’m a full stack developer who enjoys building clean, scalable, and user-friendly software.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <FaAmazon size={38} className="text-orange-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Amazon Pay Internship</h2>
            <p className="text-gray-400 leading-7">
              Worked on backend engineering, Java, Spring Boot, secure APIs,
              financial transaction systems, and production-level workflows.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <FaCode size={38} className="text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Full Stack Developer</h2>
            <p className="text-gray-400 leading-7">
              Skilled in React, Java, Spring Boot, MySQL, REST APIs, Tailwind CSS,
              Git, GitHub, and modern frontend engineering.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <FaRocket size={38} className="text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">What I Build</h2>
            <p className="text-gray-400 leading-7">
              I build backend systems, dashboards, AI-powered applications,
              and interactive portfolio experiences like this macOS-inspired OS.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <FaLinkedin size={38} className="text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">More Updates</h2>
            <p className="text-gray-400 leading-7 mb-4">
              Take my LinkedIn for more updates about my projects, internship,
              and developer journey.
            </p>

            <a
              href="https://www.linkedin.com/in/dharunika-hari"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-2xl font-semibold transition"
            >
              Visit LinkedIn
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => openWindow("resume")}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl font-semibold transition"
          >
            Open Resume
          </button>

          <button
            onClick={() => openWindow("github")}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl font-semibold transition"
          >
            <FaGithub />
            GitHub
          </button>

          <button
            onClick={() => openWindow("contact")}
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl font-semibold transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </Window>
  )
}

export default AboutApp