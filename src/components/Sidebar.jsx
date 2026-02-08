export const Sidebar = () => {
  const links = [
    { icon: 'terminal', label: 'Home.exe', href: '#hero' },
    { icon: 'database', label: 'Stack.json', href: '#tech' },
    { icon: 'layers', label: 'Projects.md', href: '#work' },
    { icon: 'alternate_email', label: 'Contact.sh', href: '#contact' },
  ]

  return (
    <nav className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="relative flex flex-col items-center gap-8 py-8">
        <div className="sidebar-line opacity-20"></div>
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="group relative flex items-center justify-center size-10 rounded-full bg-background-dark border border-border-dark hover:border-primary transition-all"
          >
            <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">
              {link.icon}
            </span>
            <span className="absolute left-14 px-2 py-1 rounded bg-surface-dark text-[10px] text-white font-mono opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-border-dark uppercase tracking-widest whitespace-nowrap">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
