import React, { useState } from "react";
import Map from "../../../assets/Images/Map.png";
import LocationLogo from "../../../assets/Images/LocationLogo.svg";
import "./searchbar.css";

function SearchBar({
  handleFoundCity,
}: {
  handleFoundCity: (cityData: any) => void;
}) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=2b9db91f8d8493f3374df65ee36118ce`,
      );
      const data = await response.json();
      if (data.length > 0) {
        const cityData = {
          city: data[0].name,
          country: data[0].country,
          temperature: "N/A",
          weather: "Clear sky day",
          lat: data[0].lat,
          lon: data[0].lon,
        };
        handleFoundCity(cityData);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchBar">
      <img src={Map} alt="lpweather-Map" className="backgroundImage" />
      <div className="searchContainer">
        <div className="inputContainer">
          <img src={LocationLogo} alt="lpweather-LocationLogo" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Example: New York, United States"
            className="searchInput"
          />
        </div>
        <button onClick={handleSearch} className="searchButton">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
