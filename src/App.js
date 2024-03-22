import { useState, useEffect } from "react";
import helmet from "./img/helmet-1.png";
import potion from "./img/potion-1.png";
import ring from "./img/ring-1.png";
import scroll from "./img/scroll-1.png";
import shield from "./img/shield-1.png";
import sword from "./img/sword-1.png";
import "./App.css";
import SingleCard from "./components/SingleCard";

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src) {
        console.log("Correct");
        resetTurns();
      } else {
        console.log("Incorrect")
        resetTurns();
      }
    }
  }, [choiceOne, choiceTwo])

  //reset choices & increase turn
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;

/*

const shuffleCards = [...cardImages, ...cardImages]; - writing two times making two the same arrays (because we need 1 pair of each picture)

const [choiceOne, setChoiceOne] = useState(null);
const [choiceTwo, setChoiceTwo] = useState(null); - we are choosing 2 cards so needs to be 2 states

*/
