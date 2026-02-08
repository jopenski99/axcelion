import { portfolioData } from '../data'

export const Hero = () => {
  const { name, description, role, experience, location, status } = portfolioData.profile
  const baseUrl = import.meta.env.BASE_URL

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
            <div className="mb-4">
              <span className="text-primary">jp@portfolio</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~</span>$ <span className="text-white">whoami</span>
            </div>

            <div className="mb-6">
              <p className="text-slate-400 mb-2">// Developer, Lead, Planner.</p>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{name}</h1>
              <p className="text-slate-400 max-w-2xl">{description}</p>
            </div>

            <div className="mb-4">
              <span className="text-primary">jp@portfolio</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~</span>$ <span className="text-white">cat intro.ts</span>
            </div>

            <div className="space-y-1">
              <div>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">profile</span> = {'{'}
              </div>
              <div className="pl-6">
                <span className="code-teal">role:</span> <span className="code-yellow">'{role}'</span>,
              </div>
              <div className="pl-6">
                <span className="code-teal">experience:</span>{' '}
                <span className="code-yellow">'{experience}'</span>,
              </div>
              <div className="pl-6">
                <span className="code-teal">location:</span>{' '}
                <span className="code-yellow">'{location}'</span>,
              </div>
              <div className="pl-6">
                <span className="code-teal">status:</span>{' '}
                <span className="code-yellow">'{status}'</span>
              </div>
              <div>{'}'};
              </div>
            </div>

            <div className="mt-8">
              <span className="text-primary">jp@portfolio</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~</span>$ <span className="text-white">ls ./capabilities</span>
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
