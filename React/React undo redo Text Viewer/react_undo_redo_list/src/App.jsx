import { useState } from "react";
function App() {
  const [txt, setTxt] = useState("");
  const [lst, setLst] = useState([]);
  const [idx, setIdx] = useState(-1);
  const addItem = () => {
    if (txt.trim() === "") return;
    const nl = [...lst, txt];
    setLst(nl);
    setIdx(nl.length - 1);
    setTxt("");
  };
  const undo = () => {
    if (idx > 0) {
      setIdx(idx - 1);
    }
  };
  const redo = () => {
    if (idx < lst.length - 1) {
      setIdx(idx + 1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        marginTop: "50px",
      }}
    >
      <h2>Undo Redo Text Viewer</h2>
      <div>
        <input
          type="text"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          placeholder="Enter anything"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div
        style={{
          width: "300px",
          height: "100px",
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        {idx >= 0 ? lst[idx] : "No Data"}
      </div>
      <div>
        <button onClick={undo} disabled={idx <= 0}>
          Undo
        </button>
        <button
          onClick={redo}
          disabled={idx === -1 || idx >= lst.length - 1}
          style={{ marginLeft: "10px" }}
        >
          Redo
        </button>
      </div>
    </div>
  );
}
export default App;