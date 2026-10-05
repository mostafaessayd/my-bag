import { useState } from "react";

function MultiplySubtract() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  function calculate() {
    const a = Number(number1);
    const b = Number(number2);

    setResult({
      multiplication: a * b,
      subtraction: a - b,
    });
  }

  return (
    <main className="project-page">
      <h1>Multiply & Subtract Two Numbers</h1>

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

        <button onClick={calculate}>
          Calculate
        </button>
      </div>

      {result !== null && (
        <div className="result">
          <p>Multiplication: {result.multiplication}</p>
          <p>Subtraction: {result.subtraction}</p>
        </div>
      )}
    </main>
  );
}

export default MultiplySubtract;