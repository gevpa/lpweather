import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Map from "../../assets/Images/Map.png";
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
        <FaLocationArrow className="locationIcon" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Example: New York, United States"
          className="searchInput"
        />
        <button onClick={handleSearch} className="searchButton">
          Submit
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
