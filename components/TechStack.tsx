'use client'
import Reveal from './ui/Reveal'
import { useState } from 'react'

const skillCategories = [
    {
        title: "Languages",
        items: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "Go"],
        bgClass: "bg-neo-yellow",
        textHover: "group-hover:text-neo-yellow"
    },
    {
        title: "Web Development",
        items: ["React.js", "Next.js", "Node.js", "Express.js", "fastapi", "REST APIs", "WebSocket", "WebRTC"],
        bgClass: "bg-neo-blue",
        textHover: "group-hover:text-neo-blue"
    },
    {
        title: "AI/ML",
        items: ["LangChain", "LLMs", "TensorFlow", "PyTorch", "Scikit-learn"],
        bgClass: "bg-neo-green",
        textHover: "group-hover:text-neo-green"
    },
    {
        title: "Blockchain",
        items: ["Solidity", "Hardhat", "Ethers.js", "Ethereum"],
        bgClass: "bg-neo-pink",
        textHover: "group-hover:text-neo-pink"
    },
    {
        title: "Tools",
        items: ["Docker", "Git", "Firebase", "MySQL", "Postman", "MLflow"],
        bgClass: "bg-neo-purple",
        textHover: "group-hover:text-neo-purple"
    }
];

const allSkillsFlat = skillCategories.flatMap(c => c.items.map(item => ({ name: item, category: c.title, textHover: c.textHover, bgClass: c.bgClass })));
const half = Math.ceil(allSkillsFlat.length / 2);
const firstHalf = allSkillsFlat.slice(0, half);
const secondHalf = allSkillsFlat.slice(half);

// Duplicate to create a seamless marquee loop
const marqueeItems1 = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
const marqueeItems2 = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

export default function TechStack() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
            }
            .animate-marquee {
                animation: marquee 180s linear infinite;
                display: flex;
                width: max-content;
            }
            .animate-marquee-reverse {
                animation: marquee-reverse 180s linear infinite;
                display: flex;
                width: max-content;
            }
            .animate-marquee:hover, .animate-marquee-reverse:hover {
                animation-play-state: paused;
            }
            .modal-scroll::-webkit-scrollbar {
                width: 12px;
            }
            .modal-scroll::-webkit-scrollbar-track {
                background: #f9fafb;
                border-left: 2px solid #000;
            }
            .modal-scroll::-webkit-scrollbar-thumb {
                background: #000;
                border: 2px solid #000;
            }
        `}</style>

        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
                <Reveal>
                    <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">
                        TECH<span className="text-neo-green">_STACK</span>
                    </h2>
                </Reveal>
                <Reveal className="flex items-center gap-2 mb-2 md:mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="font-mono text-neo-green text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
                </Reveal>
            </div>

            {/* Marquee Section */}
            <div 
                className="overflow-hidden w-full border-y-4 border-white bg-white/1 py-12 cursor-pointer group flex flex-col gap-8" 
                onClick={() => setIsModalOpen(true)}
            >
                <div className="animate-marquee">
                    {marqueeItems1.map((skill, index) => (
                        <div key={`m1-${index}`} className="flex-shrink-0 mx-4">
                            <div className={`group/item h-24 w-48 border-4 border-black bg-white hover:bg-black transition-all duration-300 relative shadow-hard hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0 flex flex-col items-center justify-center p-2`}>
                                <div className="text-black group-hover/item:text-white font-mono text-xs mb-1 opacity-70">
                                    &gt;_ {skill.category}
                                </div>
                                <div className={`text-black ${skill.textHover.replace('group-hover', 'group-hover/item')} font-black font-display text-xl uppercase text-center`}>
                                    {skill.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="animate-marquee-reverse">
                    {marqueeItems2.map((skill, index) => (
                        <div key={`m2-${index}`} className="flex-shrink-0 mx-4">
                            <div className={`group/item h-24 w-48 border-4 border-black bg-white hover:bg-black transition-all duration-300 relative shadow-hard hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0 flex flex-col items-center justify-center p-2`}>
                                <div className="text-black group-hover/item:text-white font-mono text-xs mb-1 opacity-70">
                                    &gt;_ {skill.category}
                                </div>
                                <div className={`text-black ${skill.textHover.replace('group-hover', 'group-hover/item')} font-black font-display text-xl uppercase text-center`}>
                                    {skill.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t-4 border-white mt-12 pt-4 flex justify-between font-mono text-xs text-gray-400">
                <span>TOTAL_NODES: {allSkillsFlat.length}</span>
                <span>MEMORY_USAGE: 256MB</span>
            </div>
        </div>

        {/* Modal Window */}
        {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
                <div 
                    className="bg-white border-4 border-black p-6 md:p-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto modal-scroll shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative text-black" 
                    onClick={e => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 w-12 h-12 bg-neo-red text-white border-4 border-black font-black text-2xl hover:bg-black hover:text-neo-red transition-colors flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                    >
                        X
                    </button>
                    
                    <h3 className="text-5xl md:text-7xl font-black uppercase mb-8 border-b-8 border-black pb-4 text-black tracking-tighter w-[90%] md:w-full">
                        System <span className="text-neo-purple">Specs</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="border-4 border-black p-6 bg-gray-50 group/card hover:bg-black hover:text-white transition-colors">
                                <h4 className={`text-xl md:text-2xl font-black font-display mb-6 inline-block px-4 py-2 border-4 border-black ${category.bgClass} text-black group-hover/card:border-white uppercase`}>
                                    &gt; {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {category.items.map((item, i) => (
                                        <span key={i} className="px-4 py-2 text-sm font-mono border-2 border-black bg-white text-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover/card:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover/card:border-white">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}
