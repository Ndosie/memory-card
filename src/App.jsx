import "./App.css";
import Card from "./components/Card";

function App() {
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
          <option>Domestic Animals</option>
          <option>Fruits</option>
          <option>House Items</option>
        </select>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
