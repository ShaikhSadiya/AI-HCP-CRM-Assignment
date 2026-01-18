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
      alert("Backend not running. Please start FastAPI.");
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
        <div style={{ marginTop: "15px" }}>
          <p><b>Tool Used:</b> {response.tool}</p>

          {response.action && <p><b>Result:</b> {response.action}</p>}
          {response.summary && <p><b>Summary:</b> {response.summary}</p>}
          {response.suggestion && <p><b>Follow-up:</b> {response.suggestion}</p>}
          {response.recommendation && <p><b>Recommendation:</b> {response.recommendation}</p>}
        </div>
      )}
    </div>
  );
}

export default ChatAssistant;
