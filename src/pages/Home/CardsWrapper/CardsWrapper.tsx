import WeatherCard from "../../../components/WeatherCard/WeatherCard";

//TODO: Use mock data to render cards in a grid layout
const cardMockData = [
  {
    city: "New York",
    country: "United States",
    temperature: "25°C",
    weather: "Sunny",
    lat: 40.7128,
    lon: -74.006,
  },
];

function CardsWrapper() {
  return (
    <div style={{ minHeight: "500px" }}>
      {cardMockData.map((cardData) => (
        <WeatherCard data={cardData} />
      ))}
    </div>
  );
}

export default CardsWrapper;
