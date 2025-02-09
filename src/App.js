import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard"
import LoginPage from "./pages/Login";  // Ensure correct path
import SignPage from "./pages/SingUp";  // Ensure correct path
import PrivateLayout from "./layout/private.layout";
import PublicLayout from "./layout/public.layout";

function App() {
  return (
    <Routes>
      {/* Uncomment this if HomePage exists */}
      <Route path="/" element={<PrivateLayout><DashboardPage /></PrivateLayout>} />
      <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
      <Route path="/signup" element={<PublicLayout><SignPage /></PublicLayout>} />
    </Routes>
  );
}

export default App;
