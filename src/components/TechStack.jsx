import { portfolioData } from '../data'

export const TechStack = () => {
  return (
    <section
      className="py-32 px-6 lg:ml-20 border-t border-border-dark bg-[#0D1117]/50"
      id="tech"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-primary text-sm mb-2 tracking-[0.3em] uppercase">
            &lt;TechStack /&gt;
          </h2>
          <h3 className="text-4xl font-bold text-white">Expertise Grid</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioData.techStack.map((tech) => (
            <div
              key={tech.id}
              className="glow-card group p-6 rounded-lg bg-surface-dark border border-border-dark transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <h4 className="text-white font-mono font-bold text-sm">{tech.name}</h4>
              </div>
              <p className="text-xs text-slate-500 font-mono">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
