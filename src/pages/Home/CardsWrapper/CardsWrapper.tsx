import WeatherCard from "../../../components/WeatherCard/WeatherCard";
import "../CardsWrapper/CardsWrapper.css";

interface CardsWrapperProps {
  cards: Array<{
    city: string;
    country: string;
    temperature: string;
    weather: string;
    icon: string;
    lat: number;
    lon: number;
  }>;
}

function CardsWrapper({ cards }: CardsWrapperProps) {
  return (
    <div className="cardsWrapper">
      <div className="cardsContainer">
        {cards.map((cardData, index) => (
          <WeatherCard
            key={`${cardData.city}-${cardData.lat}-${cardData.lon}`}
            data={cardData}
            isRecent={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsWrapper;
