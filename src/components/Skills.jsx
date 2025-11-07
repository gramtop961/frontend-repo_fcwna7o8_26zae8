import { motion } from 'framer-motion'
import { Code, Palette, Cpu, Brush } from 'lucide-react'

export default function Skills() {
  const devSkills = ['Unity / Unreal', 'C# / C++', 'Gameplay Systems', 'AI & Pathfinding', 'Shaders (HLSL/GLSL)', 'Networking']
  const artSkills = ['Modeling (Blender/ZBrush)', 'Texturing (Substance)', 'Rigging & Animation', 'Lighting & LookDev', 'Concept Art', 'VFX & Particles']

  return (
    <section id="skills" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Skills Matrix
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <SkillCard title="Game Development" icon={<Cpu className="h-6 w-6" />} items={devSkills} accent="from-fuchsia-500/30 to-indigo-500/30" badgeIcon={<Code className="h-4 w-4" />} />
          <SkillCard title="Game Art" icon={<Brush className="h-6 w-6" />} items={artSkills} accent="from-emerald-500/30 to-cyan-500/30" badgeIcon={<Palette className="h-4 w-4" />} />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, icon, items, accent, badgeIcon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur`}
    >
      <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${accent} opacity-50 blur-2xl`} />
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
            {badgeIcon}
            Dual Focus
          </span>
        </div>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {items.map((s) => (
            <li key={s} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/90">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
