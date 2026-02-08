import { portfolioData } from '../data'

export const Footer = () => {
  const { year, version, status } = portfolioData.footer

  return (
    <footer className="py-12 px-6 lg:ml-20 border-t border-border-dark text-center font-mono text-[10px] text-slate-600 tracking-[0.2em] uppercase">
      © {year} John Paul Perez — Build {version} — {status}
    </footer>
  )
}
