import React from "react";
import CharacterSelector from "../components/CharacterSelector";

const LandingPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
        Choose Your Anime Character
      </h1>
      <CharacterSelector />
    </div>
  );
};

export default LandingPage;

