from langgraph.graph import StateGraph
from typing import TypedDict
from tools import (
    log_interaction_tool,
    edit_interaction_tool,
    summarize_interaction_tool,
    followup_suggestion_tool,
    recommendation_tool
)

class AgentState(TypedDict):
    message: str
    intent: str
    result: dict

def detect_intent(state: AgentState):
    text = state["message"].lower()

    if "edit" in text:
        state["intent"] = "EDIT"
    elif "summary" in text or "summarize" in text:
        state["intent"] = "SUMMARY"
    elif "follow" in text:
        state["intent"] = "FOLLOWUP"
    elif "recommend" in text:
        state["intent"] = "RECOMMEND"
    else:
        state["intent"] = "LOG"

    return state

def route_to_tool(state: AgentState):
    if state["intent"] == "EDIT":
        state["result"] = edit_interaction_tool(state["message"])
    elif state["intent"] == "SUMMARY":
        state["result"] = summarize_interaction_tool(state["message"])
    elif state["intent"] == "FOLLOWUP":
        state["result"] = followup_suggestion_tool(state["message"])
    elif state["intent"] == "RECOMMEND":
        state["result"] = recommendation_tool(state["message"])
    else:
        state["result"] = log_interaction_tool(state["message"])

    return state

def run_agent(user_message: str):
    graph = StateGraph(AgentState)

    graph.add_node("intent_detector", detect_intent)
    graph.add_node("tool_router", route_to_tool)

    graph.set_entry_point("intent_detector")
    graph.add_edge("intent_detector", "tool_router")

    app = graph.compile()

    result = app.invoke({"message": user_message})
    return result["result"]
