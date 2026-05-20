import Window from "../windows/Window"

import useWindowStore from "../../store/useWindowStore"

function AboutApp() {

  const { closeWindow } = useWindowStore()

  return (

    <Window
      title="About Me"
      closeWindow={() => closeWindow("about")}
      windowName="about"
    >

      <h1 className="text-5xl font-bold mb-6">
        Hi, I'm Dharunika 👋
      </h1>

      <p className="text-gray-300 text-xl leading-relaxed">
        Amazon Intern • Full Stack Developer • AI Enthusiast

        <br /><br />

        Passionate about building modern web applications,
        AI-powered solutions, and beautiful user experiences.
      </p>

    </Window>

  )
}

export default AboutApp