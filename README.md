AI-First HCP CRM (LangGraph + FastAPI + React)

This project is an AI-powered HCP (Healthcare Professional) interaction logging system.

Features

Conversational AI input (Right Panel)

Structured CRM form auto-filled from AI (Left Panel)

Doctor, Product, Sentiment, Summary extraction

Save interaction using FastAPI backend

LangGraph-based agent with tool routing (mock)


Tech Stack

Frontend: React (Vite)

Backend: FastAPI

AI Orchestration: LangGraph

Storage: In-memory (mock database)


How it Works

User enters meeting details in AI Assistant.

Backend agent extracts key entities.

Form is auto-filled with structured data.

Interaction is saved via API.

Run Locally
Backend
cd backend
python -m uvicorn main:app --reload

Frontend
cd frontend/hcp-crm-ui
npm install
npm run dev


