import React from "react";
import Data from "./Data";
import emojipedia from "../emojipedia";

// Main App Component
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((data) => (
          <Data
            key={data.id}
            emoji={data.emoji}
            name={data.name}
            meaning={data.meaning.substring(0, 100) + "..."}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
