# AI Backend Service

A Flask-based AI backend that integrates with OpenRouter to provide AI-powered responses in your portfolio.

## Setup

### 1. Get OpenRouter API Key
- Visit [OpenRouter](https://openrouter.ai)
- Sign up for a free account
- Go to your API keys page and copy your API key

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Configure Environment
Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Then edit `.env` and add your OpenRouter API key:
```
OPENROUTER_API_KEY=your_api_key_here
```

### 4. Run the Backend
```bash
python app.py
```

The server will start at `http://localhost:8000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Ask Question
```
POST /api/ask
Content-Type: application/json

{
  "question": "What is your experience?",
  "context": {
    "name": "Your Name",
    "role": "Your Role",
    "experience": "Your Experience",
    "location": "Your Location",
    "status": "Your Status"
  }
}
```

Response:
```json
{
  "success": true,
  "response": "AI-generated response based on your professional context",
  "question": "What is your experience?"
}
```

### Stream Question (Placeholder)
```
POST /api/ask-stream
Content-Type: application/json
```

Same payload as `/ask` endpoint.

## How It Works

1. **Frontend**: User types a question in the Hero component's CLI
2. **API Call**: Question is sent to backend via POST `/api/ask`
3. **Context**: Professional details are included in the request
4. **LLM**: Backend queries OpenRouter's LLM with professional context
5. **Response**: LLM response is returned to frontend
6. **Display**: Response is displayed in the terminal CLI

## Customization

### Change the LLM Model
Edit `app.py` and change the `self.model` value in `AIBackendService`:
```python
self.model = "openai/gpt-3.5-turbo"  # Different model
```

Available free models on OpenRouter:
- `meta-llama/llama-3-8b-instruct:free`
- `mistralai/mistral-7b-instruct:free`
- And more at https://openrouter.ai

### Customize System Prompt
Edit the `SYSTEM_PROMPT` variable to change how the AI responds.

### Add More Context
Send additional data in the `context` object when calling from the frontend:
```javascript
await aiChat.query("Your question", {
  context: {
    name: "...",
    skills: ["React", "Python", ...],
    // Add more fields
  }
})
```

## Troubleshooting

- **502 Bad Gateway**: Backend is not running, start it with `python app.py`
- **401 Unauthorized**: Check your OpenRouter API key is correct
- **Timeout errors**: OpenRouter might be slow, wait a moment and try again
- **CORS errors**: Make sure `flask-cors` is installed

## Production Deployment

For production, use a WSGI server like Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

Then deploy to your favorite hosting service (Heroku, AWS, DigitalOcean, etc.)

## Advanced: SSE Streaming

The `/api/ask-stream` endpoint is a placeholder. To implement real Server-Sent Events streaming:

```python
from flask import Response

@app.route('/api/ask-stream', methods=['POST'])
def ask_stream():
    def generate():
        # Stream response chunks as they arrive
        for chunk in ai_service.stream_query(...):
            yield f"data: {json.dumps({'chunk': chunk})}\n\n"
    
    return Response(generate(), mimetype='text/event-stream')
```

Then on frontend:
```javascript
const eventSource = new EventSource('/api/ask-stream');
eventSource.onmessage = (event) => {
  const chunk = JSON.parse(event.data).chunk;
  // Display chunk
};
```
