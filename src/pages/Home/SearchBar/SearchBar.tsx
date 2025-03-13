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
      const locationData = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=2b9db91f8d8493f3374df65ee36118ce`,
      ).then((response) => response.json());

      //If there are no results, return
      if (locationData.length === 0) {
        return;
      }

      const foundLocation = locationData[0];
      const weatherData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${foundLocation.lat}&lon=${foundLocation.lon}&appid=2b9db91f8d8493f3374df65ee36118ce&units=metric`,
      ).then((response) => response.json());
      console.log("weatherData", weatherData);
      if (locationData.length > 0) {
        const cityAndWeatherData = {
          city: locationData[0].name,
          country: locationData[0].country,
          temperature: `${Math.round(weatherData.main.temp)}°C`,
          weather: weatherData.weather[0].description,
          lat: locationData[0].lat,
          lon: locationData[0].lon,
          icon: weatherData.weather[0].icon,
        };
        handleFoundCity(cityAndWeatherData);
        setQuery("");
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
