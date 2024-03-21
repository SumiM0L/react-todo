import React, { useState } from "react";

function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodoList = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todos</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>+ Add</button>
      </div>
      <div>
        {todoList.map((todo, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>
                <input type="text" value={todo} readOnly />
              </div>
              <div>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
