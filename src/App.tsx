import { useState } from "react";
import "./app.css";
import CardsWrapper from "./pages/Home/CardsWrapper/CardsWrapper";
import Footer from "./pages/Home/Footer/Footer";
import HeaderAndTagline from "./pages/Home/HeaderAndTagline/HeaderAndTagline";
import SearchBar from "./pages/Home/SearchBar/SearchBar";

function App() {
  const [foundCity, setFoundCity] = useState("");

  const handleFoundCity = (city: string) => {
    setFoundCity(city);
  };

  return (
    <>
      <div className="app-wrapper">
        <HeaderAndTagline />
        <SearchBar handleFoundCity={handleFoundCity} />
        <CardsWrapper />
        <Footer />
      </div>
    </>
  );
}

export default App;
