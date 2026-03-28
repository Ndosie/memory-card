import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import shuffle from "./data/data";

function App() {
  const [objects, setObjects] = useState(() => shuffle());

  function handleShuffle() {
    setObjects([...shuffle()]);
  }

  return (
    <div className="container">
      <div className="navBar">
        <h1>Memory Game</h1>
        <div className="scores">
          <p>Score:0</p>
          <p>Best Score: 0</p>
        </div>
      </div>
      <div className="contents">
        <p>Click the images only once to get the points.</p>
        <select>
          <option>Select objects</option>
          <option>Animals</option>
          <option>Fruits</option>
          <option>House Items</option>
        </select>
        <div className="cards">
          {objects.map((animal) => (
            <Card
              key={animal.id}
              id={animal.id}
              name={animal.name}
              onCardClick={handleShuffle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
