import { useState } from "react";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (currentInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: currentInput,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setCurrentInput("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          marginRight: "10px",
        }}
      />

      <button onClick={addTask} style={{ padding: "10px 20px" }}>
        Add
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <span
              onClick={() => toggleTask(todo.id)}
              style={{
                cursor: "pointer",
                flex: 1,
                textAlign: "left",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTask(todo.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;