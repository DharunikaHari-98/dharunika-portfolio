import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import {
  FaDownload,
  FaFilePdf,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa"

function ResumeApp() {
  const { closeWindow } = useWindowStore()

  return (
    <Window
      title="Resume"
      closeWindow={() => closeWindow("resume")}
      windowName="resume"
    >
      <div className="h-[560px] overflow-y-auto">
        <div className="flex items-center gap-5 mb-8">
          <FaFilePdf size={50} className="text-red-400" />

          <div>
            <h1 className="text-4xl font-bold">Dharunika Resume</h1>
            <p className="text-gray-400">
              Full Stack Developer • Amazon Intern
            </p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FaUserGraduate /> Profile
          </h2>

          <p className="text-gray-300 leading-8">
            Passionate full stack developer skilled in React, Spring Boot,
            Java, AI-powered applications, and modern frontend engineering.
            Interested in building scalable, clean, and user-friendly software.
          </p>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FaBriefcase /> Experience
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-purple-400">
                Amazon Intern
              </h3>
              <p className="text-gray-400">
                Software development, problem solving, frontend engineering,
                Git workflow, and real-world project experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400">
                Full Stack Developer
              </h3>
              <p className="text-gray-400">
                Built projects using React, Spring Boot, MySQL, Tailwind CSS,
                REST APIs, and modern UI design.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Java",
              "Spring Boot",
              "MySQL",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "AI/ML",
              "REST API",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-purple-600/30 border border-purple-500/40 px-4 py-2 rounded-2xl text-purple-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <a
          href="/Dharunika_Resume.pdf"
          download="Dharunika_Resume.pdf"
          className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 px-6 py-4 rounded-2xl font-semibold transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </Window>
  )
}

export default ResumeApp