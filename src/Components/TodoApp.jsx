import React, { useState } from "react";
import "../Styles/styleTodo.css";

function generateId() {
  return crypto.randomUUID(); // Generates a truly unique ID
}

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return; // Prevent adding empty todos

    setTodos((todos) => [...todos, { text: input, id: generateId() }]);

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />

        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span style={{ color: "black" }}>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
