import { useState } from "react";

function ChatAssistant({ setAiData }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const sendToAI = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data);
      setAiData(data);
    } catch (err) {
      alert("Backend not running. Start FastAPI.");
    }
  };

  return (
    <div>
      <textarea
        placeholder="Describe doctor interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />
      <button onClick={sendToAI}>Send to AI</button>

      {response && (
        <div>
          <p><b>Tool Used:</b> {response.tool}</p>
          <p><b>Result:</b> {response.action || response.summary || response.suggestion || response.recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default ChatAssistant;
