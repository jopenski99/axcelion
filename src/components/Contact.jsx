import { useState } from 'react'
import { portfolioData } from '../data'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      className="py-32 px-6 lg:ml-20 bg-[#0D1117]/50 border-t border-border-dark"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-primary text-sm mb-2 tracking-[0.3em] uppercase">
            &lt;Connection /&gt;
          </h2>
          <h3 className="text-4xl font-bold text-white">Start a new process.</h3>
        </div>

        <div className="glass-morphism rounded-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 font-mono">
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-slate-500 font-bold">
                input.name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-background-dark/50 border border-border-dark rounded p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase text-slate-500 font-bold">
                input.email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-background-dark/50 border border-border-dark rounded p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase text-slate-500 font-bold">
                input.message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="System payload description..."
                rows="5"
                className="w-full bg-background-dark/50 border border-border-dark rounded p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-4 bg-primary text-background-dark font-black rounded hover:bg-white transition-all flex items-center justify-center gap-3"
              >
                EXECUTE_SEND
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-slate-500 font-mono text-xs uppercase tracking-widest">
          {portfolioData.contact.social.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
