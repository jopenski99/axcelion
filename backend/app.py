"""
AI Backend Service using OpenRouter LLM
Flask API that integrates with OpenRouter for AI-powered responses
"""

import os
import json
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
OPENROUTER_API_KEY = os.getenv('OPENROUTER_API_KEY')
OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'
USE_MOCK_MODE = os.getenv('USE_MOCK_MODE', 'false').lower() == 'true'

# Professional context template
SYSTEM_PROMPT = """You are an AI assistant representing a professional developer. 
You have access to the following professional context:

{professional_context}

Based on this context, answer questions about the professional's experience, skills, and background.
Be concise, professional, and helpful. If a question is outside the scope of the professional context, 
politely redirect the conversation back to the professional domain."""


class AIBackendService:
    """Service for handling AI interactions via OpenRouter"""
    
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.model = "mistralai/mistral-small-3.1-24b-instruct:free"
        
    def get_mock_response(self, question: str, context: dict) -> str:
        """Generate a mock response for testing (when API key is exhausted)"""
        name = context.get('name', 'the developer')
        role = context.get('role', 'Developer')
        experience = context.get('experience', 'several years')
        
        # Simple mock responses based on keywords
        question_lower = question.lower()
        
        if any(word in question_lower for word in ['experience', 'years', 'work']):
            return f"{name} has {experience} of professional experience working as a {role}. They bring expertise in full-stack development, leading technical teams, and delivering scalable solutions."
        
        if any(word in question_lower for word in ['skills', 'tech', 'technology', 'stack']):
            return f"{name} specializes in modern web technologies including React, Node.js, TypeScript, and cloud platforms. They're skilled in architecture design and mentoring junior developers."
        
        if any(word in question_lower for word in ['available', 'hire', 'contact', 'work']):
            return f"{name} is open to new opportunities and collaborations. They're available for full-time roles, consulting, or freelance projects. Please use the contact section to reach out!"
        
        if any(word in question_lower for word in ['about', 'who', 'tell']):
            return f"Hi! I'm {name}, a {role} with {experience} of experience. I'm passionate about building great products and mentoring talented developers. Feel free to ask me anything!"
        
        # Default response
        return f"That's a great question! Based on {name}'s background as a {role}, they'd likely have valuable insights to share. For more detailed information, please reach out through the contact section."
        
        
    def get_system_prompt(self, context: dict) -> str:
        """Generate system prompt with professional context"""
        context_str = json.dumps(context, indent=2)
        return SYSTEM_PROMPT.format(professional_context=context_str)
    
    def query_llm(self, question: str, context: dict) -> str:
        """
        Query the LLM with OpenRouter
        
        Args:
            question: User's question
            context: Professional context dictionary
            
        Returns:
            LLM response text
        """
        # Use mock mode if enabled (for testing when API limit is reached)
        if USE_MOCK_MODE:
            print("[INFO] Using MOCK mode - no API calls will be made")
            return self.get_mock_response(question, context)
        
        try:
            if not self.api_key:
                return "Error: API key not configured. Please set OPENROUTER_API_KEY in .env or enable USE_MOCK_MODE=true"
            
            system_prompt = self.get_system_prompt(context)
            
            payload = {
                "model": self.model,
                "messages": [
                    {
                        "role": "system",
                        "content": system_prompt
                    },
                    {
                        "role": "user",
                        "content": question
                    }
                ],
                "temperature": 0.7,
                "max_tokens": 500,
            }
            
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Portfolio AI Assistant",
                "Content-Type": "application/json"
            }
            
            print(f"[DEBUG] Sending request to {OPENROUTER_API_URL}")
            print(f"[DEBUG] Model: {self.model}")
            print(f"[DEBUG] Question: {question}")
            
            response = requests.post(
                OPENROUTER_API_URL,
                json=payload,
                headers=headers,
                timeout=30
            )
            
            print(f"[DEBUG] Response status: {response.status_code}")
            
            # Check for specific error codes
            if response.status_code == 402:
                return "Error: Your OpenRouter API key has exceeded free spending limits. Set USE_MOCK_MODE=true in .env to use demo mode, or visit https://openrouter.ai to add credits."
            
            response.raise_for_status()
            
            data = response.json()
            
            # Extract message from response
            if 'choices' in data and len(data['choices']) > 0:
                return data['choices'][0]['message']['content']
            else:
                return "Error: Unexpected response format from LLM"
            
            data = response.json()
            
            # Extract message from response
            if 'choices' in data and len(data['choices']) > 0:
                return data['choices'][0]['message']['content']
            else:
                return "Error: Unexpected response format from LLM"
                
        except requests.exceptions.Timeout:
            return "Error: Request to LLM service timed out"
        except requests.exceptions.RequestException as e:
            return f"Error: Failed to communicate with LLM service: {str(e)}"
        except Exception as e:
            return f"Error: {str(e)}"


# Initialize AI Service
ai_service = AIBackendService(OPENROUTER_API_KEY) if OPENROUTER_API_KEY else None


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "ok",
        "service": "AI Backend Service",
        "openrouter_configured": OPENROUTER_API_KEY is not None
    }), 200


@app.route('/api/ask', methods=['POST'])
def ask():
    """
    Main endpoint for asking questions
    
    Expected JSON payload:
    {
        "question": "Your question here",
        "context": {
            "name": "Name",
            "role": "Role",
            "experience": "Experience",
            "location": "Location",
            "status": "Status"
        }
    }
    """
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({
                "success": False,
                "error": "No JSON data provided"
            }), 400
        
        question = data.get('question', '').strip()
        context = data.get('context', {})
        
        if not question:
            return jsonify({
                "success": False,
                "error": "Question cannot be empty"
            }), 400
        
        if not ai_service:
            return jsonify({
                "success": False,
                "error": "AI service not configured. Please set OPENROUTER_API_KEY environment variable"
            }), 503
        
        # Query the LLM
        response = ai_service.query_llm(question, context)
        
        return jsonify({
            "success": True,
            "response": response,
            "question": question
        }), 200
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Server error: {str(e)}"
        }), 500


@app.route('/api/ask-stream', methods=['POST'])
def ask_stream():
    """
    Streaming endpoint for real-time responses
    (This is a placeholder - full SSE streaming can be implemented later)
    """
    try:
        data = request.get_json()
        question = data.get('question', '').strip()
        context = data.get('context', {})
        
        if not question:
            return jsonify({
                "success": False,
                "error": "Question cannot be empty"
            }), 400
        
        if not ai_service:
            return jsonify({
                "success": False,
                "error": "AI service not configured"
            }), 503
        
        response = ai_service.query_llm(question, context)
        
        return jsonify({
            "success": True,
            "response": response,
            "question": question
        }), 200
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Server error: {str(e)}"
        }), 500


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({
        "success": False,
        "error": "Endpoint not found"
    }), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({
        "success": False,
        "error": "Internal server error"
    }), 500


if __name__ == '__main__':
    # Note: Use a production WSGI server (gunicorn, waitress) in production
    app.run(debug=True, host='0.0.0.0', port=8000)
