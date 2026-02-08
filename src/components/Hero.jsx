import { useEffect } from 'react'
import gsap from 'gsap'
import { portfolioData } from '../data'

export const Hero = () => {
  const { name, description, role, experience, location, status } = portfolioData.profile
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Store original text in data attributes
      document.querySelector('#hero-name')?.setAttribute('data-text', name)
      document.querySelector('#hero-description')?.setAttribute('data-text', description)

      // Animate terminal window - ease in from bottom
      gsap.from('.terminal-window', {
        duration: 0.8,
        opacity: 0,
        y: 60,
        ease: 'power2.out',
      })

      // Create terminal typing animation timeline
      const tl = gsap.timeline({ delay: 1.2 })

      // Section 1: whoami command
      tl.to('#whoami-line', { opacity: 1, duration: 0.1 }, 0)
        .to('#whoami-cmd', { opacity: 1, duration: 0.6, delay: 0.1 }, 0.1)
        // Show whoami output container
        .to('#whoami-output', { opacity: 1, duration: 0.1, delay: 0.2 }, 0.3)
        // Type the name
        .to('#hero-name', {
          duration: name.length * 0.025,
          delay: 0.1,
          onUpdate() {
            const element = document.querySelector('#hero-name')
            const fullText = element?.getAttribute('data-text') || ''
            const progress = this.progress()
            const charCount = Math.floor(progress * fullText.length)
            if (element) element.textContent = fullText.substring(0, charCount)
          },
        }, 0.6)
        // Type the description
        .to('#hero-description', {
          duration: description.length * 0.02,
          delay: 0.1,
          onUpdate() {
            const element = document.querySelector('#hero-description')
            const fullText = element?.getAttribute('data-text') || ''
            const progress = this.progress()
            const charCount = Math.floor(progress * fullText.length)
            if (element) element.textContent = fullText.substring(0, charCount)
          },
        }, 0.9)
        // Section 2: cat intro.ts command
        .to('#intro-line', { opacity: 1, duration: 0.1, delay: 0.8 }, 3.8)
        .to('#intro-cmd', { opacity: 1, duration: 0.6, delay: -0.1 }, 0)
        // Show code output (character by character for each line)
        .to('#profile-code', {
          opacity: 1,
          duration: 0.01,
          delay: 0.3,
        }, 3.9)
        .to('#profile-code-text', {
          duration: 1.5,
          delay: -0.01,
          onStart() {
            const element = document.querySelector('#profile-code-text')
            if (element) element.textContent = ''
          },
          onUpdate() {
            const element = document.querySelector('#profile-code-text')
            const codeLines = [
              `const profile = {`,
              `  role: '${role}',`,
              `  experience: '${experience}',`,
              `  location: '${location}',`,
              `  status: '${status}'`,
              `};`,
            ]
            const fullText = codeLines.join('\n')
            const progress = this.progress()
            const charCount = Math.floor(progress * fullText.length)
            if (element) element.textContent = fullText.substring(0, charCount)
          },
        }, 4.7)
        // Section 3: ls ./capabilities command
        .to('#capabilities-line', { opacity: 1, duration: 0.1, delay: 1.2 }, 4.8)
        .to('#capabilities-cmd', { opacity: 1, duration: 0.6, delay: -0.1 }, 4.85)

      // Animate CTA buttons after typing completes
      tl.from(
        '#hero .flex.gap-4 a',
        {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          ease: 'power2.out',
          duration: 0.6,
        },
        '-=0.2'
      )
    }, 100)

    return () => clearTimeout(timer)
  }, [name, description, role, experience, location, status])

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center md:items-start md:justify-start md:pt-24 px-6 lg:ml-20 relative overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
        <img
          src={`${baseUrl}assets/jp.png`}
          alt="Background"
          className="w-full h-full object-cover filter"
          style={{
            filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8)',
          }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="terminal-window rounded-xl overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] border-b border-[#30363D]">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-[#FF5F56]"></div>
              <div className="size-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="size-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 tracking-widest">
              bash — 120x40
            </div>
            <div className="w-12"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 lg:p-10 font-mono text-sm md:text-base leading-relaxed">
            {/* whoami section */}
            <div id="whoami-line" className="mb-4 opacity-0">
              <span className="text-primary">jp@portfolio</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~</span>$ <span id="whoami-cmd" className="text-white opacity-0">whoami</span>
            </div>

            <div id="whoami-output" className="mb-6 opacity-0">
              <p className="text-slate-400 mb-2">// Developer, Lead, Planner.</p>
              <h1 id="hero-name" className="text-3xl md:text-5xl font-bold text-white mb-4"></h1>
              <p id="hero-description" className="text-slate-400 max-w-2xl"></p>
            </div>

            {/* cat intro.ts section */}
            <div id="intro-line" className="mb-4 opacity-0">
              <span className="text-primary">jp@portfolio</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~</span>$ <span id="intro-cmd" className="text-white opacity-0">cat intro.ts</span>
            </div>

            <div id="profile-code" className="space-y-1 opacity-0">
              <div id="profile-code-text" className="font-mono text-sm whitespace-pre"></div>
            </div>

            {/* ls ./capabilities section */}
            <div id="capabilities-line" className="mt-8 opacity-0">
              <span className="text-primary">jp@portfolio</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~</span>$ <span id="capabilities-cmd" className="text-white opacity-0">ls ./capabilities</span>
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 font-mono">
          <a
            href="#work"
            className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all rounded text-sm font-bold flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">visibility</span> VIEW_PROJECTS
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white/5 border border-white/10 text-slate-300 hover:border-white/30 transition-all rounded text-sm font-bold flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">mail</span> CONTACT_ME
          </a>
        </div>
      </div>
    </section>
  )
}
