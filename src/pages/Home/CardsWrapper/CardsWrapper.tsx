import React, { useState } from "react";
import WeatherCard from "../../../components/WeatherCard/WeatherCard";
import "../CardsWrapper/CardsWrapper.css";

const cardMockData = [
  {
    city: "Texas",
    country: "United States",
    temperature: "25°C",
    weather: "Clear sky day",
    lat: 40.7128,
    lon: -74.006,
  },
  {
    city: "New York",
    country: "United States",
    temperature: "25°C",
    weather: "Clear sky night",
    lat: 40.7128,
    lon: -74.006,
  },
  {
    city: "Boston",
    country: "United States",
    temperature: "-3°C",
    weather: "Snow",
    lat: 42.3601,
    lon: -71.0589,
  },
  {
    city: "Boston",
    country: "United States",
    temperature: "-3°C",
    weather: "Snow",
    lat: 42.3601,
    lon: -71.0589,
  },
  {
    city: "Boston",
    country: "United States",
    temperature: "-3°C",
    weather: "Snow",
    lat: 42.3601,
    lon: -71.0589,
  },
  {
    city: "Boston",
    country: "United States",
    temperature: "-3°C",
    weather: "Snow",
    lat: 42.3601,
    lon: -71.0589,
  },
  {
    city: "Boston",
    country: "United States",
    temperature: "-3°C",
    weather: "Snow",
    lat: 42.3601,
    lon: -71.0589,
  },
  {
    city: "Boston",
    country: "United States",
    temperature: "-3°C",
    weather: "Snow",
    lat: 42.3601,
    lon: -71.0589,
  },
];

function CardsWrapper() {
  const [cards, setCards] = useState(cardMockData);

  // const handleSearch = (newCardData) => {
  //   setCards((prevCards) => [newCardData, ...prevCards]);
  // };

  return (
    <div className="cardsWrapper">
      {/* Grid για τις κάρτες */}
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

  // return (
  //   <div style={{ minHeight: "500px" }}>
  //     {cardMockData.map((cardData) => (
  //       <WeatherCard data={cardData} />
  //     ))}
  //   </div>
  // );
}

export default CardsWrapper;
