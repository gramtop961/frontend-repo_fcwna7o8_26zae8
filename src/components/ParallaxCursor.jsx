import { useEffect, useRef } from 'react'

export default function ParallaxCursor() {
  const cursorRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      const orb = cursorRef.current
      const bg = bgRef.current
      if (!orb || !bg) return

      const x = e.clientX
      const y = e.clientY
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`

      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (x - cx) / cx
      const dy = (y - cy) / cy
      bg.style.transform = `translate3d(${dx * -20}px, ${dy * -20}px, 0)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* subtle parallax stars backdrop */}
      <div ref={bgRef} className="pointer-events-none fixed inset-0 z-0 opacity-50" style={{ backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 300px 120px, rgba(255,255,255,0.3), transparent)', backgroundColor: 'transparent' }} />
      {/* glowing orb cursor */}
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/70 blur-md will-change-transform" />
    </>
  )
}
