import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <Reveal className="md:col-span-4">
                <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
                    <img src="/Assets/images/img.jpg" alt="Vaidik" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10">AVATAR.JPG</span>
                </div>
            </Reveal>
            <div className="md:col-span-8 flex flex-col justify-center">
                <Reveal>
                    <h2 className="text-6xl font-black uppercase mb-6">Who am I?</h2>
                </Reveal>
                <Reveal>
                    <p className="font-mono text-xl leading-relaxed mb-6">
                        I am Vaidik, a fullstack developer and problem solver pursuing CS from IIIT Lucknow. I believe the web has become too sanitized. I bring <span className="bg-neo-yellow px-1 border border-black">personality</span> back to code.
                    </p>
                </Reveal>
                <Reveal>
                    <p className="font-mono text-lg mb-8 text-gray-600 border-l-4 border-neo-purple pl-4">
                        &gt; Specialized in Designing and Web Development.<br/>
                        &gt; Obsessed with Perfection and AI.<br/>
                        &gt; 2+ years of shipping code that works.
                    </p>
                </Reveal>

                <Reveal className="flex gap-4">
                    <div className="bg-neo-black text-white px-4 py-2 font-mono text-sm border-2 border-transparent">
                        📍 LOCATION: WORLDWIDE
                    </div>
                    <div className="bg-neo-green text-black px-4 py-2 font-mono text-sm border-2 border-black">
                        🟢 STATUS: AVAILABLE
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  )
}
