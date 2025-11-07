import { motion } from 'framer-motion'
import { User, Download, Mail, Phone } from 'lucide-react'

export default function AboutContact() {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-6 w-6 text-fuchsia-400" />
              <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
            </div>
            <p className="text-white/80">
              I’m Vishal, a Game Developer and 3D Artist blending engineering with visual storytelling. I build polished gameplay systems, craft shaders, and create stylized assets optimized for real-time.
            </p>
            <p className="text-white/80">
              My toolkit spans Unity/Unreal, C#/C++, Blender, Substance, and Houdini. I love prototyping mechanics, iterating quickly, and pushing visuals with performant techniques.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#resume" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400"><Download className="h-4 w-4" /> Download Resume</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">Contact</a>
            </div>
          </motion.div>

          <motion.div id="contact" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h3 className="mb-4 text-xl font-semibold">Get in touch</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400" placeholder="Your name" />
              <input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400" placeholder="Email" type="email" />
              <textarea className="min-h-[120px] w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400" placeholder="Message" />
              <button className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400"><Mail className="h-4 w-4" /> Send</button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> vishal@example.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 90000 00000</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
