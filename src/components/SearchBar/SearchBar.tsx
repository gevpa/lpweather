import React, { useState } from "react";
import Map from "../../assets/Images/Map.png";
import LocationLogo from "../../assets/Images/LocationLogo.svg";
import "./searchbar.css";
function SearchBar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
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
