import { useState } from "react";
import "../assets/pages style/word-search.css";

function WordSearch() {
  const [word, setWord] = useState("");

  const letters = Array.from({ length: 36 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  );
  
  return (
    <div className="app">
      <h1>Word Search</h1>

      <div className="grid">
        {letters.map((letter, index) => (
          <div className="cell" key={index}>
            {letter} 
          </div>
        ))}
      </div>

      <div className="search-area">
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <button>Search</button>
      </div>

      <div className="result">
        Found or Not Found
      </div>
    </div>
  );
}

export default WordSearch;