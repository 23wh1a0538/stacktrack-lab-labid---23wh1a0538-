import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tasks from "./Tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;