import React, { useState } from "react";
import "../styles/VotingSystem.css";

function VotingSystem() {
  const [vote, setVote] = useState(null);

  return (
    <div className="voting-container">
      <h2>Online Voting System</h2>
      <p>Cast your vote securely and transparently.</p>
      <div className="vote-options">
        <button
          className={vote === "Candidate A" ? "selected" : ""}
          onClick={() => setVote("Candidate A")}
        >
          Candidate A
        </button>
        <button
          className={vote === "Candidate B" ? "selected" : ""}
          onClick={() => setVote("Candidate B")}
        >
          Candidate B
        </button>
      </div>
      {vote && <p className="vote-result">You voted for: {vote}</p>}
    </div>
  );
}

export default VotingSystem;
