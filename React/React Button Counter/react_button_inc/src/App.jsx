import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(10);
  const [cnt, setCnt] = useState(0);
  const handleClick = () => {
    setCnt((prev) => prev + 1);
  };
  useEffect(() => {
    if (cnt > 0 && cnt % 3 === 0) {
      setX((prev) => prev * 2);
    }
  }, [cnt]);
  return (
    <div>
      <h1>x = {x}</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>Button Press Count: {cnt}</p>
    </div>
  );
}
export default App;