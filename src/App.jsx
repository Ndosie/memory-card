import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import shuffle from "./data/data";

function App() {
  const [objects, setObjects] = useState(() => shuffle());
  const [selections, setSelections] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  function handleClick(id) {
    if (selections.includes(id)) {
      if (bestScore < selections.length)  
        setBestScore(selections.length)
      setSelections([]);
    } else {
      if (selections.length === 12) {
        setBestScore(selections.length);
        setSelections([])
      } else {
        setSelections([...selections, id]);
      }
    }
    setObjects([...shuffle()]);
  }

  return (
    <div className="container">
      <div className="navBar">
        <h1>Memory Game</h1>
        <div className="scores">
          <p>Score:{selections.length}</p>
          <p>Best Score: {bestScore}</p>
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
              onCardClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
