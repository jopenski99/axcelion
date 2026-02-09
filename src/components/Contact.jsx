import { useState } from 'react'
import { portfolioData } from '../data'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/mdaloqoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
          <span className="text-[15px] text-slate-500 font-mono">I design solutions with a systematic, scalable approach.
            If that’s what you’re looking for,</span>
          <h3 className="text-4xl font-bold text-white">Let's start a new process.</h3>
        </div>

        <div className="glass-morphism rounded-2xl p-8 lg:p-12">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded text-green-400 font-mono text-sm">
              ✓ Message sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded text-red-400 font-mono text-sm">
              ✗ Error sending message. Please try again.
            </div>
          )}

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
                required
                disabled={isSubmitting}
                className="w-full bg-background-dark/50 border border-border-dark rounded p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm disabled:opacity-50"
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
                required
                disabled={isSubmitting}
                className="w-full bg-background-dark/50 border border-border-dark rounded p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm disabled:opacity-50"
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
                required
                disabled={isSubmitting}
                className="w-full bg-background-dark/50 border border-border-dark rounded p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm disabled:opacity-50"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-background-dark font-black rounded hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING...' : 'EXECUTE_SEND'}
                <span className="material-symbols-outlined">{isSubmitting ? 'hourglass_empty' : 'send'}</span>
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
