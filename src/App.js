import { useState } from "react";
import cover from "./img/cover.png";
import helmet from "./img/helmet-1.png";
import potion from "./img/potion-1.png";
import ring from "./img/ring-1.png";
import scroll from "./img/scroll-1.png";
import shield from "./img/shield-1.png";
import sword from "./img/sword-1.png";
import "./App.css";

const cardImages = [
  { src: helmet },
  { src: potion },
  { src: ring },
  { src: scroll },
  { src: shield },
  { src: sword },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src={cover} alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

/*

const shuffleCards = [...cardImages, ...cardImages]; - writing two times making two the same arrays (because we need 1 pair of each picture)

przerobić filmiki od 4 - 9

*/
