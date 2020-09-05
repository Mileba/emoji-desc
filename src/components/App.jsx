import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function createEmoji(emoji) {
  return (
    <Card
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
      <Footer />
    </div>
  );
}

export default App;
