import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Card
          name={emojipedia[0].name}
          emoji={emojipedia[0].emoji}
          meaning={emojipedia[0].meaning}
        />
        <Card
          name={emojipedia[1].name}
          emoji={emojipedia[1].emoji}
          meaning={emojipedia[1].meaning}
        />
        <Card
          name={emojipedia[2].name}
          emoji={emojipedia[2].emoji}
          meaning={emojipedia[2].meaning}
        />
      </dl>
      <Footer />
    </div>
  );
}

export default App;
