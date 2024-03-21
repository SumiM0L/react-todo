import React from "react";
import { useNavigate } from "react-router-dom";
import "./Counter.css";

function Landingpage() {
  const navigate = useNavigate();

  const couter = () => {
    console.log("test");
    navigate("/counter");
  };
  const todolist = () => {
    navigate("/todolist");
  };
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Learning</h2>
      </div>

      <div className="components">
        <button onClick={() => couter()}> Couter</button>
        <button onClick={() => todolist()}> Todos</button>
      </div>
    </>
  );
}

export default Landingpage;
