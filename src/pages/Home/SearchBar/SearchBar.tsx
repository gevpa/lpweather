import React, { useState } from "react";
import Map from "../../../assets/Images/Map.png";
import LocationLogo from "../../../assets/Images/LocationLogo.svg";
import "./searchbar.css";
function SearchBar({
  handleFoundCity,
}: {
  handleFoundCity: (city: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  console.log("query", query);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=2b9db91f8d8493f3374df65ee36118ce`,
      );
      const data = response.json();
      // handleFoundCity();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
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
