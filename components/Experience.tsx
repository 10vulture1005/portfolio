import Reveal from './ui/Reveal'

const experiences = [
    {
        role: "Web Developer",
        period: "Recent",
        company: "@ Phinance",
        color: "text-neo-blue",
        markerColor: "bg-neo-blue",
        items: [
            "Built a responsive website to display the company's idea",
            "Prepared a backend to pre-register the users",
            "Built on Next.js"
        ]
    },
    {
        role: "Algorithmic Trader",
        period: "2 Years",
        company: "@ Independent",
        color: "text-neo-green",
        markerColor: "bg-neo-green",
        items: [
            "Trading algorithmically with deployed algorithms",
            "Developed and maintained automated trading systems",
            "Analyzed market data to optimize strategies"
        ]
    }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter text-center">
            Experience<span className="text-neo-red">_Log</span>
        </h2>

        <div className="text-center mb-16 max-w-3xl mx-auto space-y-6 font-mono">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block bg-neo-yellow px-6 py-3 border-4 border-black font-black uppercase text-2xl shadow-hard transform hover:-translate-y-1 transition-transform cursor-pointer">
                Open to work now
            </button>
        </div>

        <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
            {experiences.map((exp, i) => (
                <Reveal key={i} className="relative pl-8 md:pl-16">
                    <div className={`absolute -left-[14px] top-2 w-6 h-6 ${exp.markerColor} border-4 border-black`}></div>
                    <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                            <h3 className="text-3xl font-black uppercase">{exp.role}</h3>
                            <span className="font-mono font-bold bg-neo-black text-white px-2 py-1">{exp.period}</span>
                        </div>
                        <p className={`font-mono text-xl mb-2 ${exp.color} font-bold`}>{exp.company}</p>
                        <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                            {exp.items.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            ))}
        </div>
    </section>
  )
}
