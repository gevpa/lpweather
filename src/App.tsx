import { useState } from "react";
import "./app.css";
import CardsWrapper from "./pages/Home/CardsWrapper/CardsWrapper";
import Footer from "./pages/Home/Footer/Footer";
import HeaderAndTagline from "./pages/Home/HeaderAndTagline/HeaderAndTagline";
import SearchBar from "./pages/Home/SearchBar/SearchBar";

interface CityData {
  city: string;
  country: string;
  temperature: string;
  weather: string;
  lat: number;
  lon: number;
}

function App() {
  const [cards, setCards] = useState<CityData[]>([]);

  const handleFoundCity = (cityData: CityData) => {
    setCards((prevCards) => [cityData, ...prevCards]);
  };

  return (
    <>
      <div className="app-wrapper">
        <HeaderAndTagline />
        <SearchBar handleFoundCity={handleFoundCity} />
        <CardsWrapper cards={cards} />
        <Footer />
      </div>
    </>
  );
}

export default App;
