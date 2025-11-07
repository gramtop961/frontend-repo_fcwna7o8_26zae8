import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Music, VolumeX, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (musicOn) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [musicOn])

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient/scanline overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        {/* Top bar */}
        <div className="absolute top-6 left-0 right-0 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_20px_6px_rgba(244,114,182,0.6)]" />
            <span className="text-sm uppercase tracking-[0.2em] text-fuchsia-200">Vishal • Game Dev × Game Artist</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-fuchsia-200 transition hover:text-white">About</a>
            <a href="#skills" className="text-fuchsia-200 transition hover:text-white">Skills</a>
            <a href="#projects" className="text-fuchsia-200 transition hover:text-white">Projects</a>
            <a href="#contact" className="text-fuchsia-200 transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Toggle music" onClick={() => setMusicOn(v => !v)} className="rounded-full bg-white/10 p-2 backdrop-blur transition hover:bg-white/20">
              {musicOn ? <Music size={18} /> : <VolumeX size={18} />}
            </button>
            <a href="mailto:vishal@example.com" className="rounded-full bg-white/10 p-2 backdrop-blur transition hover:bg-white/20" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 backdrop-blur transition hover:bg-white/20" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 backdrop-blur transition hover:bg-white/20" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow md:text-6xl">
            Enter the Playground of Code and Art
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-fuchsia-200/90 md:text-lg">
            I’m Vishal — crafting immersive game worlds, responsive systems, and cinematic visuals. Explore projects, art, and experiments.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(232,121,249,0.45)] transition hover:bg-fuchsia-400">
              View Projects
            </a>
            <a href="#about" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background music */}
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/audio/2022/03/15/audio_5a3b4f2b49.mp3" />
    </section>
  )
}
