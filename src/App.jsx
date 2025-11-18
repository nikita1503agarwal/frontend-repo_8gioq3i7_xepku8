import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

function GradientBG() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(2,6,23,0.7)_100%)]" />
    </>
  )
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_25px_rgba(99,102,241,0.6)]" />
            <span className="text-white font-semibold tracking-tight text-lg">DotHound</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-white/70 hover:text-white transition">Services</a>
            <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
            <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:opacity-90 transition">
            Start a Project
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <GradientBG />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 flex flex-col items-start">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.25)]">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
            Futuristic digital craft
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            We design surreal, cybernetic brand experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70">
            DotHound is a digital agency crafting immersive interfaces, generative identities, and interactive 3D websites that feel like the future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(99,102,241,0.45)] hover:opacity-90 transition">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition backdrop-blur-md">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const cards = [
    {
      title: 'Brand Systems',
      desc: 'Living design languages powered by generative identity.'
    },
    {
      title: '3D Web Experiences',
      desc: 'Interactive scenes, smooth motion, and cinematic depth.'
    },
    {
      title: 'Product UX',
      desc: 'Elegant interfaces that convert curiosity into action.'
    },
  ]

  return (
    <section id="services" className="relative bg-[linear-gradient(180deg,#020617_0%,#0a0f1f_100%)] text-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 text-fuchsia-300/90">
          <Sparkles size={18} />
          <span className="uppercase tracking-wider text-xs">What we do</span>
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Design for the near future</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-fuchsia-400/30 transition shadow-[0_0_30px_rgba(168,85,247,0.12)]">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 mb-4 opacity-80 group-hover:opacity-100 transition" />
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-cyan-300/90">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const items = [
    'Immersive fashion drop microsite',
    'AI-native SaaS onboarding flow',
    'Crypto wallet brand and site',
    'Interactive conference keynote',
  ]
  return (
    <section id="work" className="relative bg-slate-950 text-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(2,6,23,0.6)]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyan-300 mt-1" size={18} />
                <p className="text-white/80">{t}</p>
              </div>
              <div className="mt-4 h-40 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.25),transparent_60%)] border border-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative bg-[linear-gradient(180deg,#0a0f1f_0%,#020617_100%)] text-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center shadow-[0_0_60px_rgba(59,130,246,0.15)]">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to build what’s next?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Tell us about your vision. We’ll return with a plan, timeline, and a moodboard that captures your brand’s future.
          </p>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-400/40" placeholder="Your name" />
            <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-400/40" placeholder="Email" />
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 hover:opacity-90 transition">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <footer className="bg-slate-950 border-t border-white/10 text-white/60 text-xs py-8 text-center">© {new Date().getFullYear()} DotHound. All rights reserved.</footer>
    </div>
  )
}
