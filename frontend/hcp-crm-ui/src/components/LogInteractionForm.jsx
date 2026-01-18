function LogInteractionForm({ aiData }) {

  const saveInteraction = async () => {
    const res = await fetch("http://127.0.0.1:8000/save_interaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aiData)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form>
      <label>Doctor Name</label>
      <input value={aiData?.doctor || ""} readOnly />

      <label>Product</label>
      <input value={aiData?.product || ""} readOnly />

      <label>Sentiment</label>
      <input value={aiData?.sentiment || ""} readOnly />

      <label>Summary</label>
      <textarea value={aiData?.summary || ""} readOnly />

      <button type="button" onClick={saveInteraction}>
        Save Interaction
      </button>
    </form>
  );
}

export default LogInteractionForm;
