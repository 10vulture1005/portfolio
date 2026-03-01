'use client'
import { useState } from 'react'
import Reveal from './ui/Reveal'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_TOKEN as string)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed:", data)
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form", error)
      alert("There was an error submitting the form. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
        <Reveal className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative mt-12 block">
            <div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
                <span className="font-black text-2xl">START A PROJECT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">Let's<br/>Talk<br/>Code.</h2>
                    <p className="font-mono text-lg mb-8 text-gray-600">
                        I am currently available for freelance work and open to full-time opportunities.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                                <i className="ri-mail-line text-xl"></i>
                            </div>
                            <a href="mailto:vaidiksaxena14@gmail.com" className="text-xl font-bold hover:bg-neo-blue cursor-hover">vaidiksaxena14@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                                <i className="ri-map-pin-line text-xl"></i>
                            </div>
                            <span className="text-xl font-bold">Remote / Earth</span>
                        </div>
                    </div>
                </div>

                {!isSubmitted ? (
                    <form id="contact-form" className="space-y-6 bg-gray-50 p-6 border-2 border-black" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
                            <input type="text" name="name" required placeholder="NAME / COMPANY" className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
                            <input type="email" name="email" required placeholder="EMAIL ADDRESS" className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
                            <textarea name="message" required rows={4} placeholder="JOB DETAILS..." className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"></textarea>
                        </div>
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                        <button type="submit" disabled={isSubmitting} className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard neo-button hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT DATA'}
                        </button>
                    </form>
                ) : (
                    <div className="py-20 text-center bg-gray-50 border-2 border-black p-6">
                        <i className="ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block"></i>
                        <h3 className="text-2xl font-black uppercase">Transmission Received</h3>
                        <p className="font-mono text-sm mt-2">System response initialized. I will reach out shortly.</p>
                    </div>
                )}
            </div>
        </Reveal>
    </section>
  )
}
