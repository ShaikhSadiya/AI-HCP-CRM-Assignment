import { useState } from "react";

function ChatAssistant({ setAiData }) {
  const [message, setMessage] = useState("");

  const sendToAI = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
      });

      const data = await res.json();
      setAiData(data.extracted_data);
    } catch (error) {
      alert("Backend not connected. Is FastAPI running?");
    }
  };

  return (
    <div>
      <textarea
        placeholder="Describe your doctor meeting..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={sendToAI}>Send to AI</button>
    </div>
  );
}

export default ChatAssistant;
