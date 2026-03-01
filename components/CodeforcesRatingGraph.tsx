'use client'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'

interface RatingChange {
  contestId: number
  contestName: string
  handle: string
  rank: number
  ratingUpdateTimeSeconds: number
  oldRating: number
  newRating: number
}

export default function CodeforcesRatingGraph({ handle }: { handle: string }) {
  const [data, setData] = useState<RatingChange[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`)
        if (!res.ok) throw new Error('Failed to fetch')
        
        const json = await res.json()
        if (json.status !== 'OK') throw new Error(json.comment)

        setData(json.result)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError(true)
        setLoading(false)
      }
    }

    fetchData()
  }, [handle])

  if (loading) return <div className="h-48 w-full bg-neo-black animate-pulse flex items-center justify-center text-gray-500 font-mono text-xs">LOADING GRAPH...</div>
  if (error) return <div className="h-48 w-full bg-neo-black flex items-center justify-center text-neo-red font-mono text-xs border border-neo-red border-dashed">GRAPH_UNAVAILABLE</div>

  if (data.length === 0) return <div className="h-48 w-full bg-neo-black flex items-center justify-center text-gray-500 font-mono text-xs">NO CONTEST HISTORY</div>

  // Graph Calculations
  const width = 600
  const height = 200
  const padding = 20
  
  const minRating = Math.min(...data.map(d => d.newRating)) - 100
  const maxRating = Math.max(...data.map(d => d.newRating)) + 100
  const minTime = data[0].ratingUpdateTimeSeconds
  const maxTime = data[data.length - 1].ratingUpdateTimeSeconds

  const getX = (time: number) => {
    return padding + ((time - minTime) / (maxTime - minTime)) * (width - 2 * padding)
  }

  const getY = (rating: number) => {
    return height - (padding + ((rating - minRating) / (maxRating - minRating)) * (height - 2 * padding))
  }

  const points = data.map(d => `${getX(d.ratingUpdateTimeSeconds)},${getY(d.newRating)}`).join(' ')

  const maxRatingVal = Math.max(...data.map(d => d.newRating))

  return (
    <div className="w-full h-full relative group">
         {/* Grid Lines */}
         <div className="absolute inset-x-0 top-[20%] border-t border-white/5"></div>
         <div className="absolute inset-x-0 top-[40%] border-t border-white/5"></div>
         <div className="absolute inset-x-0 top-[60%] border-t border-white/5"></div>
         <div className="absolute inset-x-0 top-[80%] border-t border-white/5"></div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
            {/* Gradient definition */}
            <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#33FF57" />
                    <stop offset="100%" stopColor="#006d32" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            {/* The Line */}
            <polyline 
                points={points} 
                fill="none" 
                stroke="url(#line-gradient)" 
                strokeWidth="2" 
                filter="url(#glow)"
                vectorEffect="non-scaling-stroke"
            />

            {/* Data Points */}
            {data.map((d, i) => (
                <circle 
                    key={i} 
                    cx={getX(d.ratingUpdateTimeSeconds)} 
                    cy={getY(d.newRating)} 
                    r="3" 
                    className="fill-white hover:fill-neo-green hover:r-6 transition-all duration-300 cursor-none"
                >
                    <title>{`Contest: ${d.contestName}\nRating: ${d.newRating}\nRank: ${d.rank}`}</title>
                </circle>
            ))}
        </svg>
        
        <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 border border-white/20 text-[10px] font-mono text-neo-green">
            MAX RATING: {maxRatingVal}
        </div>
    </div>
  )
}
