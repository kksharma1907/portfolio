import React, { useState } from "react";
import "../styles/NotesApp.css";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  return (
    <div className="notes-container">
      <h2>Notes App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add Note</button>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotesApp;
