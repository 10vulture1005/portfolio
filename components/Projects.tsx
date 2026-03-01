import Reveal from './ui/Reveal'

const projects = [
    {
        title: "Finbot",
        description: "An intelligent stock analysis system that combines technical indicators, news sentiment analysis, and RAG to provide comprehensive stock insights.",
        image: "/Assets/images/finbot.png",
        tags: ["AI", "RAG", "Stock Analysis", "Sentiment Analysis"],
        link: "https://github.com/10vulture1005/Finbot",
        color: "group-hover:text-neo-red",
        mt: ""
    },
    {
        title: "Chance",
        description: "A decentralized Web3 gaming platform built on Ethereum with fair smart contract logic, real ETH betting, and secure MetaMask integration.",
        image: "/Assets/images/chance.png",
        tags: ["React", "Tailwind", "Solidity", "MetaMask"],
        link: "https://github.com/10vulture1005/Chance",
        color: "group-hover:text-neo-blue",
        mt: "md:mt-20"
    },
    {
        title: "Smart Settle",
        description: "An AI-powered expense sharing app using Gemini to plan trips and smart algorithms to minimize transactions efficiently.",
        image: "/Assets/images/smartsettle.png",
        tags: ["AI", "Gemini", "Expense Management", "Algorithms"],
        link: "https://github.com/10vulture1005/SettleSmart-frontend",
        color: "group-hover:text-neo-pink",
        mt: ""
    },
    {
        title: "CodeView",
        description: "An end-to-end technical interview platform enabling real-time video calling, live code collaboration, and chat.",
        image: "/Assets/images/codeview.png",
        tags: ["React", "Express.js", "WebRTC", "Y.js"],
        link: "https://github.com/10vulture1005/CodeView",
        color: "group-hover:text-neo-orange",
        mt: "md:mt-20"
    }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black font-display">
                Selected Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, i) => (
                    <Reveal key={i} className={`group bg-white border-4 border-black p-4 shadow-hard ${project.mt}`}>
                        <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className={`text-4xl font-black uppercase mb-2 ${project.color} transition-colors glitch-hover`}>{project.title}</h3>
                                <p className="font-mono text-sm mb-4 max-w-xs">{project.description}</p>
                                <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="bg-neo-black text-white px-2 py-1">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <a href={project.link} className="w-12 h-12 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm">
                                <i className="ri-arrow-right-up-line text-2xl"></i>
                            </a>
                        </div>
                    </Reveal>
                ))}
            </div>

            <div className="text-center mt-24">
                <a href="https://github.com/10vulture1005?tab=repositories" className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover">
                    VIEW ALL REPOS ON GITHUB
                </a>
            </div>
        </div>
    </section>
  )
}
