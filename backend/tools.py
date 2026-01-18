# tools.py

def log_interaction_tool(text: str):
    return {
        "tool": "LogInteractionTool",
        "action": "Interaction logged",
        "details": text
    }

def edit_interaction_tool(text: str):
    return {
        "tool": "EditInteractionTool",
        "action": "Interaction updated",
        "details": text
    }

def summarize_interaction_tool(text: str):
    return {
        "tool": "SummarizeInteractionTool",
        "summary": f"Summary of interaction: {text[:100]}..."
    }

def followup_suggestion_tool(text: str):
    return {
        "tool": "FollowUpSuggestionTool",
        "suggestion": "Suggested follow-up: Schedule next visit or share brochure."
    }

def recommendation_tool(text: str):
    return {
        "tool": "RecommendationTool",
        "recommendation": "Recommended product: Advanced BP Care Tablet."
    }
