import WeatherCard, {
  WeatherCardProps,
} from "../../../components/WeatherCard/WeatherCard";
import "../CardsWrapper/CardsWrapper.css";

function CardsWrapper({ cards }: { cards: WeatherCardProps[] }) {
  const reversedCards = cards.slice().reverse();

  return (
    <div className="cardsWrapper">
      <div className="cardsContainer">
        {reversedCards.map((cardData, index) => (
          <WeatherCard key={index} card={cardData} />
        ))}
      </div>
    </div>
  );
}

export default CardsWrapper;
