'use client'
import { useState, useRef, useEffect } from 'react'

interface IntroProps {
  onComplete: () => void
}

export default function Intro({ onComplete }: IntroProps) {
  const [input, setInput] = useState('')
  const [isExploding, setIsExploding] = useState(false)
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Keep focus on input
    const focusInput = () => inputRef.current?.focus()
    document.addEventListener('click', focusInput)
    focusInput()
    return () => document.removeEventListener('click', focusInput)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.toLowerCase().trim() === 'load') {
        setIsExploding(true)
        // Wait for animation to finish before unmounting
        setTimeout(() => {
          onComplete()
        }, 1000)
      } else {
        setError(true)
        setInput('')
        setTimeout(() => setError(false), 500)
      }
    }
  }

  return (
    <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center font-mono overflow-hidden transition-all duration-1000 bg-black ${isExploding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Matrix/scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      
      {/* Explosion Circle */}
      <div
        className={`absolute rounded-full pointer-events-none transition-all duration-1000 ease-out ${
          isExploding ? 'scale-[150]' : 'scale-0'
        }`}
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: isExploding
            ? 'rgba(255,255,255,1)'
            : 'rgba(255,255,255,1)',
        }}
      ></div>

      
      {/* Content Container - Fades out on explosion */}
      <div className={`relative z-10 transition-opacity duration-300 ${isExploding ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-white mb-8 text-center space-y-2">
            <p className="text-xs text-gray-500">VAIDIK.OS v2.0.25 [OFFLINE]</p>
            <p className="text-sm">INITIALIZING SYSTEM PROTOCOLS...</p>
        </div>

        <div className="w-full max-w-md bg-black border border-white/20 p-6 shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
            <div className="flex flex-col gap-2">
                <div className="text-gray-400 text-xs">root@portfolio:~/users/guest# <span className="text-neo-green">init_sequence</span></div>
                <div className="flex items-center gap-2 text-xl font-bold">
                    <span className="text-neo-green">❯</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`bg-transparent border-none outline-none text-white w-full uppercase placeholder-gray-800 ${error ? 'text-neo-red shake' : ''}`}
                        placeholder="TYPE 'LOAD'..."
                        autoComplete="off"
                        spellCheck="false"
                    />
                </div>
            </div>
        </div>

        {error && (
             <div className="text-neo-red text-xs mt-4 font-bold text-center animate-pulse">
                &gt; ERROR: INVALID COMMAND. ACCESS DENIED.
            </div>
        )}
        
        <div className="absolute bottom-[-100px] left-0 w-full text-center text-[10px] text-gray-600">
            SECURE CONNECTION ESTABLISHED : : 127.0.0.1
        </div>
      </div>

      <style jsx>{`
        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  )
}
