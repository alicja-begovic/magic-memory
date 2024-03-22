import cover from "../img/cover.png";
import "./SingleCard.css";

export default function SingleCard({ card }) {
  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={cover} alt="card back" />
      </div>
    </div>
  );
}