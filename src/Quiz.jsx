import React, { useState } from "react";

function Quiz() {
  const question = "Which planet has the most moons?";
  const options = ["Earth", "Mars", "Jupiter", "Saturn"];
  const correctAnswer = "Saturn";

  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (answer) => {
    if (answer === correctAnswer) {
      setScore((s) => s + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Wrong, try again!");
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((opt) => (
        <button key={opt} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
      <p>{feedback}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default Quiz;
