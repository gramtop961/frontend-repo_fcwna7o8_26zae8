import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutContact from './components/AboutContact'
import ParallaxCursor from './components/ParallaxCursor'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <ParallaxCursor />
      <AnimatePresence mode="wait">
        <Hero />
        <Skills />
        <Projects />
        <AboutContact />
        <footer className="border-t border-white/10 bg-[#07070d] p-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Vishal — Game Developer & Game Artist. Built with love.
        </footer>
      </AnimatePresence>
    </div>
  )
}

export default App
