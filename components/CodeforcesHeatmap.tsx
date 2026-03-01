'use client'
import { useEffect, useState } from 'react'
import { format, subDays, eachDayOfInterval, isSameDay, getDay } from 'date-fns'

interface Submission {
  creationTimeSeconds: number
  verdict: string
}

export default function CodeforcesHeatmap({ handle }: { handle: string }) {
  const [data, setData] = useState<Map<string, number>>(new Map())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
        if (!res.ok) throw new Error('Failed to fetch')
        
        const json = await res.json()
        if (json.status !== 'OK') throw new Error(json.comment)

        const submissions: Submission[] = json.result
        const submissionCounts = new Map<string, number>()

        submissions.forEach(sub => {
            if (sub.verdict === 'OK') {
                const date = format(new Date(sub.creationTimeSeconds * 1000), 'yyyy-MM-dd')
                submissionCounts.set(date, (submissionCounts.get(date) || 0) + 1)
            }
        })

        setData(submissionCounts)
        setLoading(false)
      } catch (err) {
        console.error(err)
        setError(true)
        setLoading(false)
      }
    }

    fetchData()
  }, [handle])

  if (loading) return <div className="h-32 w-full bg-neo-black animate-pulse flex items-center justify-center text-gray-500 font-mono text-xs">LOADING DATA...</div>
  if (error) return <div className="h-32 w-full bg-neo-black flex items-center justify-center text-neo-red font-mono text-xs border border-neo-red border-dashed">USER_NOT_FOUND</div>

  // Generate last year of dates
  const today = new Date()
  const startDate = subDays(today, 365)
  const dates = eachDayOfInterval({ start: startDate, end: today })
  
  // Calculate grid dimensions
  const weeks = Math.ceil(dates.length / 7)
  const boxSize = 10
  const gap = 2
  const width = weeks * (boxSize + gap)
  const height = 7 * (boxSize + gap)

  const getColor = (count: number) => {
    if (count === 0) return '#1a1a1a' // Empty
    if (count <= 1) return '#0e4429'
    if (count <= 3) return '#006d32'
    if (count <= 5) return '#26a641'
    return '#39d353' // Max
  }
  
  // Neo-Brutalist Colors for Codeforces (using Green for Pupil/Neo theme)
    const getNeoColor = (count: number) => {
    if (count === 0) return 'fill-gray-900' 
    if (count <= 1) return 'fill-neo-green/30'
    if (count <= 3) return 'fill-neo-green/60'
    if (count <= 5) return 'fill-neo-green/80'
    return 'fill-neo-green'
  }

  return (
    <div className="w-full overflow-x-auto">
        <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="max-h-[140px]">
            {dates.map((date, i) => {
                const weekIndex = Math.floor(i / 7)
                const dayIndex = getDay(date)
                const dateStr = format(date, 'yyyy-MM-dd')
                const count = data.get(dateStr) || 0
                
                return (
                    <rect
                        key={dateStr}
                        x={weekIndex * (boxSize + gap)}
                        y={dayIndex * (boxSize + gap)}
                        width={boxSize}
                        height={boxSize}
                        className={`${getNeoColor(count)} hover:stroke-white hover:stroke-1 transition-all duration-300`}
                    >
                        <title>{`${dateStr}: ${count} solutions`}</title>
                    </rect>
                )
            })}
        </svg>
    </div>
  )
}
