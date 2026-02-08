import { portfolioData } from '../data'

export const Projects = () => {
  const baseUrl = import.meta.env.BASE_URL
  return (
    <section className="py-32 px-6 lg:ml-20" id="work">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="font-mono text-primary text-sm mb-2 tracking-[0.3em] uppercase">
            &lt;Projects /&gt;
          </h2>
          <h3 className="text-4xl font-bold text-white">Production Systems</h3>
        </div>

        <div className="space-y-32">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image - alternates position */}
              <div
                className={`${
                  idx % 2 === 0
                    ? 'lg:col-span-7 order-1'
                    : 'lg:col-span-7 order-2 lg:order-2'
                }`}
              >
                <div className="browser-frame rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <img
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                    src={`${baseUrl}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                  />
                </div>
              </div>

              {/* Content - alternates position */}
              <div
                className={`${
                  idx % 2 === 0
                    ? 'lg:col-span-5 order-2 lg:order-2'
                    : 'lg:col-span-5 order-1 lg:order-1'
                } relative`}
              >
                <div
                  className={`glass-morphism p-8 rounded-2xl relative z-10 ${
                    idx % 2 === 0 ? '-ml-0 lg:-ml-20' : '-mr-0 lg:-mr-20'
                  }`}
                >
                  <p className="font-mono text-primary text-xs mb-3">
                    {project.number}. {project.category}
                  </p>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.caseStudyUrl !== '#' && (
                    <a
                      href={project.caseStudyUrl}
                      className="flex items-center gap-2 text-primary text-sm font-bold group/link"
                    >
                      VIEW_CASE_STUDY
                      <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  )}
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
