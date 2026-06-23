import React, { useState } from "react";

function App() {
  const [letter, setLetter] = useState("");
  const [result, setResult] = useState("");

  const checkLetter = () => {
    const ch = letter.toLowerCase();

    if (ch.length !== 1 || !/[a-z]/.test(ch)) {
      setResult("Please enter a single alphabet.");
    } else if ("aeiou".includes(ch)) {
      setResult("It is a Vowel.");
    } else {
      setResult("It is a Consonant.");
    }
  };

  return (
    <div>
      <h2>Vowel or Consonant Checker</h2>

      <input
        type="text"
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        placeholder="Enter a letter"
      />

      <button onClick={checkLetter}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;
