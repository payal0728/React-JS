
import React, { useState } from "react";

function App() {
  // State for user inputs
  const [text, setText] = useState("");
  const [numbers, setNumbers] = useState("");
  const [marks, setMarks] = useState("");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Interactive Assignment</h2>

      {/* 1. sayLouder */}
      <div style={{ marginBottom: "20px" }}>
        <h3>1. sayLouder</h3>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "5px", width: "250px" }}
        />
        <p><b>Output:</b> {sayLouder(text)}</p>
      </div>

      {/* 2. getPositiveNumbers */}
      <div style={{ marginBottom: "20px" }}>
        <h3>2. getPositiveNumbers</h3>
        <input
          type="text"
          placeholder="Enter numbers (comma separated)"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          style={{ padding: "5px", width: "250px" }}
        />
        <p>
          <b>Output:</b>{" "}
          {JSON.stringify(
            getPositiveNumbers(
              numbers.split(",").map((n) => Number(n.trim()))
            )
          )}
        </p>
      </div>

      {/* 3. getPassingTests */}
      <div>
        <h3>3. getPassingTests</h3>
        <input
          type="text"
          placeholder="Enter marks (comma separated)"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          style={{ padding: "5px", width: "250px" }}
        />
        <p>
          <b>Output:</b>{" "}
          {JSON.stringify(
            getPassingTests(
              marks.split(",").map((m) => Number(m.trim()))
            )
          )}
        </p>
      </div>
    </div>
  );
}

// Functions
function sayLouder(text) {
  return text ? text.toUpperCase() : "";
}

function getPositiveNumbers(numbers) {
  return numbers.filter((num) => num > 0);
}

function getPassingTests(marks) {
  return marks.filter((mark) => mark >= 10);
}

export default App;
