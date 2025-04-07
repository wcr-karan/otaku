import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChatScreen from "./pages/ChatScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat/:characterId" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

