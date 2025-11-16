import React from "react";

export default function Quiz({ question, selectedAnswer, onSelect }) {
  return (
    <div>
      <h2 className="u">{question.category}</h2>
      <h3>{question.text}</h3>
      <div className="options">
        {question.options.map(({ label, text }) => {
          const isSelected = selectedAnswer === label;
          return (
            <div
              key={label}
              className={`option ${isSelected ? "selected" : ""}`}
              onClick={() => onSelect(label)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelect(label);
                }
              }}
            >
              <strong>{label}.</strong> {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
