/**
 * AI Chat Module
 * Handles communication with the backend AI service
 * Supports streaming and non-streaming responses
 */

const API_BASE_URL = typeof import.meta !== 'undefined' ? 
  import.meta.env.VITE_AI_API_URL || 'http://localhost:8000/api' : 
  'http://localhost:8000/api'

class AIChatService {
  constructor() {
    this.isLoading = false
    this.controller = null
  }
/*   {!showAskInput && (
              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-slate-400 mb-3">available commands:</p>
                <button
                  onClick={handleAskCommand}
                  className="text-primary hover:text-primary/80 transition-colors cursor-pointer font-mono text-sm"
                >
                  <span className="text-slate-500">&gt;</span> ask - Ask me anything about my experience
                </button>
              </div>
            )}


            {showAskInput && (
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div ref={chatOutputRef} className="mb-4 max-h-64 overflow-y-auto">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className="mb-3">
                      <span className={msg.role === 'user' ? 'text-primary' : 'text-green-400'}>
                        {msg.role === 'user' ? 'You' : 'Assistant'}:
                      </span>
                      <p className={msg.role === 'user' ? 'text-slate-300 mt-1' : 'text-slate-200 mt-1'}>
                        {msg.content}
                      </p>
                    </div>
                  ))}
                  {isAiLoading && (
                    <div className="text-slate-400 animate-pulse">
                      <span className="text-green-400">Assistant:</span> thinking...
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-primary">jp@portfolio:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-blue-400">$</span>
                  <input
                    ref={askInputRef}
                    type="text"
                    onKeyDown={handleAskSubmit}
                    disabled={isAiLoading}
                    placeholder="Enter your question..."
                    className="flex-1 bg-transparent text-white outline-none placeholder-slate-600 font-mono text-sm"
                  />
                </div>
              </div>
            )} */
  /**
   * Send a query to the AI backend
   * @param {string} question - The user's question
   * @param {Object} options - Configuration options
   * @returns {Promise<string>} - The AI response
   */
  async query(question, options = {}) {
    if (this.isLoading) {
      console.warn('A request is already in progress')
      return null
    }

    if (!question || question.trim().length === 0) {
      throw new Error('Question cannot be empty')
    }

    this.isLoading = true
    this.controller = new AbortController()

    try {
      const response = await fetch(`${API_BASE_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          ...options,
        }),
        signal: this.controller.signal,
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to get response from AI')
      }

      return data.response || data.message
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request was cancelled')
        return null
      }
      throw error
    } finally {
      this.isLoading = false
      this.controller = null
    }
  }

  /**
   * Stream a query response (for real-time display)
   * @param {string} question - The user's question
   * @param {Function} onChunk - Callback for each response chunk
   * @param {Object} options - Configuration options
   */
  async streamQuery(question, onChunk, options = {}) {
    if (this.isLoading) {
      console.warn('A request is already in progress')
      return null
    }

    if (!question || question.trim().length === 0) {
      throw new Error('Question cannot be empty')
    }

    this.isLoading = true
    this.controller = new AbortController()

    try {
      const response = await fetch(`${API_BASE_URL}/ask-stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          ...options,
        }),
        signal: this.controller.signal,
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullResponse = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        fullResponse += chunk
        onChunk(chunk)
      }

      return fullResponse
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Stream was cancelled')
        return null
      }
      throw error
    } finally {
      this.isLoading = false
      this.controller = null
    }
  }

  /**
   * Cancel ongoing requests
   */
  cancel() {
    if (this.controller) {
      this.controller.abort()
      this.isLoading = false
    }
  }

  /**
   * Check if a request is in progress
   */
  get loading() {
    return this.isLoading
  }

  /**
   * Set the API base URL (useful for switching between environments)
   */
  setApiUrl(url) {
    if (url && typeof url === 'string') {
      API_BASE_URL = url
    }
  }
}

// Export singleton instance
export const aiChat = new AIChatService()

// Export class for testing or multiple instances
export default AIChatService
