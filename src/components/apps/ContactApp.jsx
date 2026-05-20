import { useState } from "react"
import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import useNotificationStore from "../../store/useNotificationStore"
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa"

function ContactApp() {
  const { closeWindow } = useWindowStore()
  const { addNotification } = useNotificationStore()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function sendMessage(e) {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      addNotification({
        title: "Contact",
        message: "Please fill all fields.",
      })
      return
    }

    const subject = `Portfolio Message from ${form.name}`

    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
`

    window.location.href = `mailto:dharunika276@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    addNotification({
      title: "Contact",
      message: "Opening your email app...",
    })

    setForm({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <Window
      title="Contact"
      closeWindow={() => closeWindow("contact")}
      windowName="contact"
    >
      <div className="h-[560px] overflow-y-auto">
        <h1 className="text-4xl font-bold mb-3">Contact Me</h1>

        <p className="text-gray-400 mb-8">
          Recruiters can contact me through email, LinkedIn, GitHub, or this
          quick message form.
        </p>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <a
            href="mailto:dharunika276@gmail.com"
            className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:bg-white/20 transition"
          >
            <FaEnvelope size={38} className="text-red-400 mb-4" />
            <h2 className="text-xl font-bold">Email</h2>
            <p className="text-gray-400">dharunika276@gmail.com</p>
          </a>

          <a
            href="https://github.com/DharunikaHari-98"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:bg-white/20 transition"
          >
            <FaGithub size={38} className="mb-4" />
            <h2 className="text-xl font-bold">GitHub</h2>
            <p className="text-gray-400">DharunikaHari-98</p>
          </a>

          <a
            href="https://www.linkedin.com/in/dharunika-hari"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:bg-white/20 transition"
          >
            <FaLinkedin size={38} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-bold">LinkedIn</h2>
            <p className="text-gray-400">Professional Profile</p>
          </a>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <FaPhone size={38} className="text-green-400 mb-4" />
            <h2 className="text-xl font-bold">Availability</h2>
            <p className="text-gray-400">Open to internship opportunities</p>
          </div>
        </div>

        <form onSubmit={sendMessage} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-black/40 border border-gray-700 rounded-2xl p-4 outline-none text-white"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full bg-black/40 border border-gray-700 rounded-2xl p-4 outline-none text-white"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full h-40 bg-black/40 border border-gray-700 rounded-3xl p-5 outline-none text-white resize-none"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </Window>
  )
}

export default ContactApp