import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const demoProjects = [
  {
    id: 'nebula-runner',
    title: 'Nebula Runner',
    tag: 'Gameplay • Systems',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    desc: 'High-speed traversal with reactive AI drones in a neon galaxy.',
    link: '#',
    glb: null,
  },
  {
    id: 'synth-guardian',
    title: 'Synth Guardian',
    tag: 'Art • 3D',
    thumb: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop',
    desc: 'Cinematic character sculpt with iridescent materials and emissive accents.',
    link: '#',
    glb: null,
  },
  {
    id: 'rift-protocol',
    title: 'Rift Protocol',
    tag: 'Shaders • VFX',
    thumb: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop',
    desc: 'Procedural portal shader with volumetric fog and particles.',
    link: '#',
    glb: null,
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative w-full bg-[#07070d] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-xl"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(232,121,249,0.25), transparent 40%)' }} />
              <img src={p.thumb} alt={p.title} className="h-44 w-full object-cover" />
              <div className="space-y-1 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </div>
                <p className="text-sm text-fuchsia-300/90">{p.tag}</p>
                <p className="text-sm text-white/80">{p.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-6">
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12] shadow-2xl">
              <button onClick={() => setActive(null)} className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 transition hover:bg-white/20">Close</button>
              <div className="grid gap-0 md:grid-cols-2">
                <img src={active.thumb} alt={active.title} className="h-64 w-full object-cover md:h-full" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{active.title}</h3>
                  <p className="mt-1 text-sm text-fuchsia-300/90">{active.tag}</p>
                  <p className="mt-4 text-white/80">{active.desc}</p>
                  <div className="mt-6 flex gap-3">
                    <a href={active.link} className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400">Open</a>
                    <button onClick={() => setActive(null)} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
