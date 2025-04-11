import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Cargar modo guardado al iniciar
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  // Cambiar y guardar en localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode ? "true" : "false");
      return newMode;
    });
  };

  const handleCalculate = async () => {
    setError("");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/calculate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2, operator }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.result);
      } else {
        setResult(null);
        setError(data.error || "Error al procesar la operación");
      }
    } catch (err) {
      setError("No se pudo conectar al servidor");
      setResult(null);
    }
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="title">Calculadora con Django y React</h1>

      <div className="calculator-card">
        <div className="content-btnMode">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider">
              <span className="icon">{darkMode ? "🌙" : "☀️"}</span>
            </span>
          </label>
        </div>

        <div className="input-group">
          <input
            type="number"
            placeholder="Número 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="+">Sumar</option>
            <option value="-">Restar</option>
            <option value="*">Multiplicar</option>
            <option value="/">Dividir</option>
            <option value="%">División Modular</option>
            <option value="**">Exponenciación</option>
          </select>
          <input
            type="number"
            placeholder="Número 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <div className="content-btnCalcular">
          <button className="calculate-btn" onClick={handleCalculate}>
            Calcular
          </button>
        </div>

        {result !== null && <h2 className="result">Resultado: {result}</h2>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;
