# AI Chat Integration Guide

This guide explains how to use the AI chat module integrated into your portfolio.

## Overview

The AI chat feature allows visitors to your portfolio to ask questions about your experience directly in the hero terminal CLI. The system consists of:

1. **Frontend Module** (`src/utils/aiChat.js`) - Handles communication with the backend
2. **React Component** (`src/components/Hero.jsx`) - Displays the chat interface
3. **Python Backend** (`backend/app.py`) - Processes queries via OpenRouter LLM

## Quick Start

### Frontend Setup

The frontend module is already integrated! It's imported in `Hero.jsx` and handles all API communication.

**Module: `src/utils/aiChat.js`**
- Provides `aiChat.query()` for asking questions
- Supports streaming and non-streaming modes
- Handles errors gracefully
- Configurable API endpoint

**Usage in your project:**
```javascript
import { aiChat } from '../utils/aiChat'

// Send a query
const response = await aiChat.query("Your question", {
  context: { name: "John", role: "Developer" }
})
```

### Backend Setup

Follow these steps to set up the Python backend:

#### 1. Install Python Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### 2. Get OpenRouter API Key
- Go to https://openrouter.ai
- Create a free account
- Copy your API key from settings

#### 3. Configure Environment
```bash
cd backend
cp .env.example .env
# Edit .env and add your OpenRouter API key
```

#### 4. Start the Backend
```bash
cd backend
python app.py
```

The backend will run on `http://localhost:8000`

## How It Works

### User Flow

1. **Visit Portfolio** → Hero section loads
2. **See CLI with "ask" command** → Click or type "ask"
3. **Input Appears** → User types their question
4. **Press Enter** → Question sent to backend
5. **Backend Processes** → LLM generates contextful response
6. **Display Response** → Chat appears in terminal

### Technical Flow

```
Frontend (React)
    ↓ (HTTP POST)
Backend (Flask)
    ↓ (API Call)
OpenRouter LLM
    ↓ (Response)
Backend (Flask)
    ↓ (HTTP Response)
Frontend (React)
    ↓ (Display)
Chat Window
```

## Configuration

### Change API Endpoint

If your backend runs on a different URL:

**In your `.env` (frontend):**
```
VITE_AI_API_URL=http://your-backend-url.com/api
```

Or set it in code:
```javascript
import AIBackendService from '../utils/aiChat'
aiChat.setApiUrl('http://your-backend-url.com/api')
```

### Change LLM Model

Edit `backend/app.py`:
```python
self.model = "openai/gpt-3.5-turbo"  # or another model
```

### Customize AI Personality

Edit the `SYSTEM_PROMPT` in `backend/app.py` to change how the AI responds to questions.

## Using Different LLM Providers

Currently set up for OpenRouter. To use other providers:

### OpenAI
```python
# backend/app.py
API_URL = 'https://api.openai.com/v1/chat/completions'
headers = {"Authorization": f"Bearer {OPENAI_API_KEY}"}
```

### Anthropic Claude
```python
API_URL = 'https://api.anthropic.com/v1/messages'
headers = {"x-api-key": ANTHROPIC_API_KEY}
```

## Troubleshooting

### Q: "Error: Failed to communicate with API"
**A:** Make sure your backend is running: `python app.py`

### Q: "Error: Unexpected response format"
**A:** Check your API key is valid and you have credits on OpenRouter

### Q: Chat input not appearing
**A:** The "ask" command should appear after `ls ./capabilities` in the terminal. Click on it or type in the terminal.

### Q: Backend shows 401 Unauthorized
**A:** Your OpenRouter API key is invalid. Get a new one from https://openrouter.ai

### Q: CORS Error
**A:** Make sure `flask-cors` is installed: `pip install flask-cors`

## Development Tips

### Debug Frontend Messages
```javascript
import { aiChat } from '../utils/aiChat'
aiChat.query("test").then(console.log).catch(console.error)
```

### Debug Backend
Check Flask logs when running:
```
 * Running on http://127.0.0.1:8000
```

### Test Backend Directly
```bash
curl -X POST http://localhost:8000/api/ask \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Who are you?",
    "context": {"name": "John", "role": "Developer"}
  }'
```

## File Structure

```
axcelion/
├── src/
│   ├── components/
│   │   └── Hero.jsx (updated with chat)
│   ├── utils/
│   │   └── aiChat.js (new - frontend module)
│   └── ...
├── backend/
│   ├── app.py (new - Flask backend)
│   ├── requirements.txt (new)
│   ├── .env.example (new)
│   └── README.md (new)
└── ...
```

## Next Steps

1. ✅ Frontend module created
2. ✅ Hero component updated
3. ⏳ Run backend locally for testing
4. ⏳ Deploy backend to production (Heroku, AWS, etc.)
5. ⏳ Update frontend API URL to production endpoint
6. ⏳ Test with real visitors

## Advanced Features to Consider

- [ ] Chat history persistence (localStorage)
- [ ] Typing indicators
- [ ] Error retry logic
- [ ] Message rate limiting
- [ ] User feedback on responses
- [ ] Analytics tracking
- [ ] Different prompts for different pages
- [ ] Multi-language support

## Support

For issues:
1. Check `backend/README.md` for backend-specific help
2. Review error messages in browser console
3. Check backend logs when running `python app.py`
4. Verify `.env` configuration

Enjoy your AI-powered portfolio! 🚀
