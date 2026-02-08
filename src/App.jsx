import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './index.css'

function App() {
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
