import React, { useState } from "react";
import "./styles.css";

var insectDictionary = {
  "🦋": "Butterfly",
  "🐌": "Snail",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🕷️": "Spider"
};

var emojisweknow = Object.keys(insectDictionary);

var PlaceHolder = "Please Input emoji Here.";

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = insectDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This emoji isn't currently available in database";
    }
    setMeaning(meaning);
    event.preventDefault();
  }
  function emojiClickHandler(emoji) {
    var userInputMeaning = insectDictionary[emoji];
    setMeaning(userInputMeaning);
  }

  return (
    <div className="App">
      <h1>Insects-Dictionary</h1>
      <input onChange={inputEventHandler} placeholder={PlaceHolder}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
