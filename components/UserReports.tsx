export default function UserReports() {
  return (
    <section id="reports" className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 inline-flex shadow-hard shadow-neo-blue/20">
                <div className="flex gap-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full border border-black"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full border border-black"></div>
                </div>
                <h2 className="font-mono text-white text-xl font-bold ml-4 tracking-tighter">USER_REPORTS.txt</h2>
                <div className="ml-8 px-2 bg-neo-blue text-black text-[10px] font-black uppercase">LIVE_FEED</div>
            </div>
        </div>

        <div className="marquee-container group cursor-hover">
            <div className="marquee-content flex gap-8 py-12 px-4 select-none">
                {/* Original Set */}
                <ReportCard
                    color="neo-green"
                    reportId="REPORT_001.log"
                    from="Student @ L J University"
                    quote="Vaidik Proved no matter how pressure or less time is he makes projects complete outstandingly"
                />
                <ReportCard
                    color="neo-blue"
                    reportId="REPORT_002.log"
                    from="CEO @ Alpha Consultancy"
                    quote="Fast, reliable, and actually has good taste in design. A rare combination."
                />
                <ReportCard
                    color="neo-pink"
                    reportId="REPORT_003.log"
                    from="Student @ L J University"
                    quote="Cleanest code I've seen in years. He knows how to handle complex state management."
                />
                <ReportCard
                    color="neo-purple"
                    reportId="REPORT_004.log"
                    from="Dev @ CreativeChaos"
                    quote="Creative designing idea and provided a Unique UI experience."
                />
                 <ReportCard
                    color="neo-orange"
                    reportId="REPORT_005.log"
                    from="UX Designer @ TechFlow"
                    quote="Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it."
                />

                {/* Duplicate Set for Loop */}
                <ReportCard
                    color="neo-green"
                    reportId="REPORT_001.log"
                    from="Student @ L J University"
                    quote="Vaidik didn't just build a website, he built a war machine. Our conversions tripled in a week."
                />
                <ReportCard
                    color="neo-blue"
                    reportId="REPORT_002.log"
                    from="CEO @ Alpha Consultancy"
                    quote="Fast, reliable, and actually has good taste in design. A rare combination."
                />
                <ReportCard
                    color="neo-pink"
                    reportId="REPORT_003.log"
                    from="Student @ L J University"
                    quote="Cleanest code I've seen in years. He knows how to handle complex state management."
                />
                <ReportCard
                    color="neo-purple"
                    reportId="REPORT_004.log"
                    from="Dev @ CreativeChaos"
                    quote="The attention to detail in the NeoBrutalist implementation is flawless. A master of his craft."
                />
                 <ReportCard
                    color="neo-orange"
                    reportId="REPORT_005.log"
                    from="UX Designer @ TechFlow"
                    quote="Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it."
                />
            </div>
        </div>
    </section>
  )
}

function ReportCard({ color, reportId, from, quote }: { color: string, reportId: string, from: string, quote: string }) {
    // Mapping color names to Tailwind classes isn't direct for dynamic classes unless safe-listed or using style. But we used theme override.
    // simpler to map:
    const borderColor = {
        'neo-green': 'hover:border-neo-green/50',
        'neo-blue': 'hover:border-neo-blue/50',
        'neo-pink': 'hover:border-neo-pink/50',
        'neo-purple': 'hover:border-neo-purple/50',
        'neo-orange': 'hover:border-neo-orange/50',
    }[color] || 'hover:border-white/50'

    const textColor = {
        'neo-green': 'text-neo-green',
        'neo-blue': 'text-neo-blue',
        'neo-pink': 'text-neo-pink',
        'neo-purple': 'text-neo-purple',
        'neo-orange': 'text-neo-orange',
    }[color] || 'text-white'
    
    const bgColor = {
        'neo-green': 'bg-neo-green',
        'neo-blue': 'bg-neo-blue',
        'neo-pink': 'bg-neo-pink',
        'neo-purple': 'bg-neo-purple',
        'neo-orange': 'bg-neo-orange',
    }[color] || 'bg-white'

    const bgText = `text-${color}/60`; // won't work with tailwind arbitrary values easily without safelist or standard class.
    
    return (
        <div className={`flex-shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard ${borderColor} hover:-translate-y-2 transition-all duration-500 relative group/card overflow-hidden text-left whitespace-normal`}>
            <div className={`absolute top-0 left-0 w-full h-1 ${bgColor}`}></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45"></div>
            <div className="flex justify-between items-start mb-6">
                <div className={`font-mono ${textColor} text-xs font-bold tracking-widest uppercase`}>{reportId}</div>
                <div className="text-[10px] font-mono text-gray-500">2025.txt</div>
            </div>
            <div className="font-mono text-gray-400 text-[10px] mb-2 uppercase tracking-tight">FROM: {from}</div>
            <p className="font-bold text-xl leading-snug mb-6 text-white/90">"{quote}"</p>
            <div className={`flex gap-1 text-lg opacity-60 text-${color === 'neo-green' ? 'neo-green' : color === 'neo-blue' ? 'neo-blue' : color === 'neo-pink' ? 'neo-pink' : color === 'neo-purple' ? 'neo-purple' : 'neo-orange'}`}>
                <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
            </div>
        </div>
    )
}
