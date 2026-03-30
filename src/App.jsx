import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import shuffle from "./data/data";

function App() {
  const [selections, setSelections] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [type, setType] = useState("");

  const objects = shuffle(type);

  function handleClick(id) {
    if (selections.includes(id)) {
      if (bestScore < selections.length) setBestScore(selections.length);
      setSelections([]);
    } else {
      if (selections.length === 12) {
        setBestScore(selections.length);
        setSelections([]);
      } else {
        setSelections([...selections, id]);
      }
    }
  }

  function handleOnchange(e) {
    setSelections([]);
    setBestScore(selections.length);
    setType(e.target.value);
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
        <select value={type} onChange={handleOnchange}>
          <option value="">Select objects</option>
          <option value="animals">Animals</option>
          <option value="fruits">Fruits</option>
          <option value="house_items">House Items</option>
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
        <a href="https://www.pexels.com">Photos provided by Pexels</a>
      </div>
    </div>
  );
}

export default App;
