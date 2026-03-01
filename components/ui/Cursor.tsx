'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run heavily on mounting, but event listeners are efficient enough
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      cursor.style.transform = `translate(-50%, -50%)`
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('.cursor-hover, a, button, input, textarea') || target.closest('.cursor-hover, a, button, input, textarea')) {
        cursor.style.width = '60px'
        cursor.style.height = '60px'
        cursor.style.backgroundColor = '#FBFF48' // Neo Yellow
        cursor.style.mixBlendMode = 'normal'
        cursor.style.border = '2px solid black'
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
       const target = e.target as HTMLElement
       if (target.matches('.cursor-hover, a, button, input, textarea') || target.closest('.cursor-hover, a, button, input, textarea')) {
        cursor.style.width = '24px'
        cursor.style.height = '24px'
        cursor.style.backgroundColor = '#fff'
        cursor.style.mixBlendMode = 'difference'
        cursor.style.border = 'none'
       }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div 
      ref={cursorRef} 
      id="cursor" 
      className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block fixed z-[9999] pointer-events-none mix-blend-difference"
      style={{ transition: 'width 0.2s, height 0.2s, background-color 0.2s, transform 0.1s' }}
    />
  )
}
