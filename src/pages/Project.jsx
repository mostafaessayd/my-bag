import { useState } from "react";

function Project() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  function addNumbers() {
    const a = Number(number1);
    const b = Number(number2);

    setResult(a + b);
  }

  return (
    <main className="project-page">
      <h1>Add Two Numbers</h1>

      <div className="input-container">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="First number"
        />

        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Second number"
        />

        <button onClick={addNumbers}>
          Add
        </button>
      </div>

      {result !== null && (
        <div className="result">
          Result: {result}
        </div>
      )}
    </main>
  );
}

export default Project;