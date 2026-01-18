from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent import run_agent
from typing import Dict

app = FastAPI()
interactions_db = []

# Allow React to call FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "HCP CRM Backend is running"}

@app.post("/chat")
def chat_with_ai(request: ChatRequest):
    result = run_agent(request.message)
    return {"extracted_data": result}


@app.post("/save_interaction")
def save_interaction(data: Dict):
    interactions_db.append(data)
    return {"message": "Interaction saved successfully"}


@app.get("/interactions")
def get_all_interactions():
    return {"data": interactions_db}
