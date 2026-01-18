This project is an AI-powered HCP (Healthcare Professional) interaction logging system based on the assignment specification.

Features
Two-panel UI:
Left: Structured CRM Form
Right: AI Assistant (Natural Language Input)

LangGraph Agent with 5 Tools:
Log Interaction
Edit Interaction
Summarize Interaction
Follow-up Suggestion
Recommendation

Automatic extraction of:
Doctor Name
Product
Sentiment
Summary
Save interaction using FastAPI backend
View stored interactions (mock database)

Tech Stack
Frontend: React (Vite)
Backend: FastAPI
AI Orchestration: LangGraph
Storage: In-memory (for demo)

How to Run
Backend
cd backend
python -m uvicorn main:app --reload

Frontend
cd frontend/hcp-crm-ui
npm install
npm run dev


