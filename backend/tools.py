def log_interaction_tool(text: str):
    doctor = "Dr. Khan" if "khan" in text.lower() else "Unknown Doctor"
    product = "BP Medicine" if "bp" in text.lower() else "General Medicine"
    sentiment = "Positive" if "positive" in text.lower() else "Neutral"

    return {
        "doctor": doctor,
        "product": product,
        "sentiment": sentiment,
        "summary": f"Met {doctor}, discussed {product}, sentiment was {sentiment}."
    }


def edit_interaction_tool(text: str):
    return f"Interaction edited: {text}"

def summarize_tool(text: str):
    return f"Summary generated for: {text}"

def followup_tool(text: str):
    return f"Follow-up suggested for: {text}"

def recommendation_tool(text: str):
    return f"Product recommendation for: {text}"
