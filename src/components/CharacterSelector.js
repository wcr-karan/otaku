import React from "react";
import { useNavigate } from "react-router-dom";
import characters from "../characterData";
import { motion } from "framer-motion";

const CharacterSelector = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
      {characters.map((char) => (
        <motion.div
          key={char.id}
          whileHover={{ scale: 1.05 }}
          style={{
            borderRadius: "12px",
            padding: "1rem",
            textAlign: "center",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            width: "200px",
            background: "#fefefe",
          }}
          onClick={() => navigate(`/chat/${char.id}`)}
        >
          <img
            src={char.image}
            alt={char.name}
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <h3 style={{ marginTop: "0.5rem" }}>{char.name}</h3>
          <p style={{ fontSize: "0.85rem", color: "#666" }}>{char.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CharacterSelector;
