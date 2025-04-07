// src/pages/ChatPage.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Yōkoso! I'm your anime assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const aiMsg = { sender: "ai", text: "Processing your otaku thoughts..." };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
    // Later: Replace aiMsg with actual AI response!
  };

  return (
    <div className="chat-page">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`msg ${msg.sender}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="input-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your anime thoughts..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;

