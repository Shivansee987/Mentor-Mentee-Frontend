import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import MentorDashboard from "./components/Dashboard/MentorDashboard";
import MenteeDashboard from "./components/Dashboard/MenteeDashboard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mentor" element={<MentorDashboard />} />
          <Route path="/mentee" element={<MenteeDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
