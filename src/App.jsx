import { useEffect } from 'react'
import gsap from 'gsap'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    // Small delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      // Animate sidebar on page load
      gsap.from('nav', {
        duration: 0.6,
        opacity: 0,
        x: -50,
        stagger: 0.1,
        ease: 'power2.out',
      })

      // Animate sidebar line
      gsap.from('.sidebar-line', {
        duration: 0.8,
        height: 0,
        delay: 0.3,
        ease: 'power2.out',
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background-dark text-slate-300">
      <Sidebar />
      <main className="w-full">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
