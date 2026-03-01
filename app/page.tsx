'use client'
import { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import CodingStats from "@/components/CodingStats";
import Projects from "@/components/Projects";
import UserReports from "@/components/UserReports";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";
import ProgressBar from "@/components/ui/ProgressBar";
import Intro from "@/components/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <main>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      
      <div className={`${showIntro ? 'fixed inset-0 overflow-hidden' : ''}`}>
          <Cursor />
          <ProgressBar />
          
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <TechStack />
          <Experience />
          <CodingStats />
          <Projects />
          <UserReports />
          <Contact />
          <Footer />
      </div>
    </main>
  );
}
