import { useState } from "react";
import LogInteractionForm from "../components/LogInteractionForm";
import ChatAssistant from "../components/ChatAssistant";
import "../index.css";

function LogInteractionScreen() {
  const [aiData, setAiData] = useState(null);

  return (
    <div className="container">
      <div className="panel">
        <h2>Log HCP Interaction</h2>
        <LogInteractionForm aiData={aiData} />
      </div>

      <div className="panel">
        <h2>AI Assistant</h2>
        <ChatAssistant setAiData={setAiData} />
      </div>
    </div>
  );
}

export default LogInteractionScreen;
