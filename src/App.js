import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard"
import LoginPage from "./pages/Login";  // Ensure correct path
import SignPage from "./pages/SingUp";  // Ensure correct path

function App() {
  return (
    <Routes>
      {/* Uncomment this if HomePage exists */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignPage />} />
    </Routes>
  );
}

export default App;
