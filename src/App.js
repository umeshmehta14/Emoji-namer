import "./styles.css";
import React, { useState } from "react";

const EmojiLib = {
  "❤️": "Red Heart",
  "😊": "Smiling Face with Smiling Eyes",
  "✨": "Sparkles",
  "😂": "Face with Tears of Joy",
  "👍": "Thumbs Up",
  "🥰": "Smiling Face with Hearts",
  "😭": "Loudly Crying Face",
  "😍": "Smiling Face with Heart-Eyes",
  "🥺": "Pleading Face",
  "🤍": "White Heart",
  "👀": "Eyes",
  "😉": "Winking Face",
  "🎉": "Party Popper",
  "👉": "Backhand Index Pointing Right"
};

var EWknow = Object.keys(EmojiLib);

export default function App() {
  const [mean, setMean] = useState("");

  const inputHandler = (event) => {
    var useI = event.target.value;
    var eMean = EmojiLib[useI];
    setMean(eMean);
    console.log(eMean);
  };
  const EmojiclickHandler = (emoji) => {
    var meaning = EmojiLib[emoji];
    setMean(meaning);
  };
  return (
    <div className="App">
      <h1>Emoji</h1>
      <input onChange={inputHandler} />

      <h2>{mean}</h2>

      <h3>Known Emojis</h3>
      {EWknow.map(function (emoji) {
        return (
          <span
            onClick={() => EmojiclickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {"  "}
          </span>
        );
      })}
    </div>
  );
}
