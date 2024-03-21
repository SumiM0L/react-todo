import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Landingpage";
import Counter from "./page/Counter";
import Todolist from "./page/Todolist";

function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<Todolist />} />
      </Routes>
    </Router>
  );
}

export default RouterComponent;
