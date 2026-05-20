import Window from "../windows/Window"
import useWindowStore from "../../store/useWindowStore"
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa"

function GitHubApp() {
  const { closeWindow } = useWindowStore()

  const repos = [
    {
      name: "dharunika-portfolio",
      description:
        "macOS-inspired interactive developer portfolio built using React, Tailwind CSS, Zustand, and Framer Motion.",
      language: "JavaScript",
      url: "https://github.com/DharunikaHari-98/dharunika-portfolio",
    },
    {
      name: "fraud-payment-system",
      description:
        "Spring Boot backend project for fraud detection in payment transactions.",
      language: "Java",
      url: "https://github.com/DharunikaHari-98/fraud-payment-system",
    },
    {
      name: "distributed-rate-limiter",
      description:
        "Java Spring Boot distributed rate limiter using Token Bucket Algorithm.",
      language: "Java",
      url: "https://github.com/DharunikaHari-98/distributed-rate-limiter",
    },
    {
      name: "URL_shortener",
      description:
        "Backend URL shortener service with fast redirection and scalable storage design.",
      language: "Java",
      url: "https://github.com/DharunikaHari-98/URL_shortener",
    },
{
  name: "OrganDonationManagement",
  description:
    "Full-stack organ donation management system with donor, recipient, hospital, organ matching, request approval, and admin modules.",
  language: "Java",
  url: "https://github.com/DharunikaHari-98/OrganDonationManagement",
},
  ]

  return (
    <Window
      title="GitHub"
      closeWindow={() => closeWindow("github")}
      windowName="github"
    >
      <div className="h-[560px] overflow-y-auto">
        <div className="flex items-center gap-4 mb-8">
          <FaGithub size={45} />

          <div>
            <h1 className="text-4xl font-bold">Selected GitHub Projects</h1>
            <p className="text-gray-400">
              Curated repositories selected for recruiters
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="bg-black/40 border border-gray-700 rounded-3xl p-6 hover:border-purple-500 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCodeBranch className="text-purple-400" />
                <h3 className="text-xl font-bold">{repo.name}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-5 leading-6">
                {repo.description}
              </p>

              <div className="flex justify-between text-sm text-gray-500">
                <span>{repo.language}</span>

                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  GitHub
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Window>
  )
}

export default GitHubApp