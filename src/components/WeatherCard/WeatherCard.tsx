import ClearSkyDay from "../../assets/WeatherIcons/Clear sky-day.svg";
import ClearSkyNight from "../../assets/WeatherIcons/Clear sky-night.svg";
import BrokenClouds from "../../assets/WeatherIcons/Broken-clouds.svg";
import FewCloudsDay from "../../assets/WeatherIcons/Few clouds-day.svg";
import FewCloudsNight from "../../assets/WeatherIcons/Few clouds-night.svg";
import Mist from "../../assets/WeatherIcons/Mist.svg";
import RainDay from "../../assets/WeatherIcons/Rain-day.svg";
import RainNight from "../../assets/WeatherIcons/Rain-night.svg";
import ScatteredClouds from "../../assets/WeatherIcons/Scattered-clouds.svg";
import ShowerRain from "../../assets/WeatherIcons/Shower-rain.svg";
import Snow from "../../assets/WeatherIcons/Snow.svg";
import Thunderstorm from "../../assets/WeatherIcons/Thunderstorm.svg";
import "../WeatherCard/weatherCard.css";
import "../../constants/constants.css";

export type WeatherCardProps = {
  city: string;
  country: string;
  temperature: string;
  weather: string;
  icon: string;
  lat: number;
  lon: number;
};

function getWeatherIcon(icon: string): string {
  switch (icon) {
    case "01d":
      return ClearSkyDay;
    case "01n":
      return ClearSkyNight;
    case "02d":
      return FewCloudsDay;
    case "02n":
      return FewCloudsNight;
    case "03d":
    case "03n":
      return ScatteredClouds;
    case "04d":
    case "04n":
      return BrokenClouds;
    case "09d":
    case "09n":
      return ShowerRain;
    case "10d":
      return RainDay;
    case "10n":
      return RainNight;
    case "11d":
    case "11n":
      return Thunderstorm;
    case "13d":
    case "13n":
      return Snow;
    default:
      return Mist;
  }
}

function WeatherCard({ card }: { card: WeatherCardProps }) {
  const weatherIcon = getWeatherIcon(card.icon);

  return (
    <div className="weatherCard">
      <div className="leftContent">
        <div className="temperature">{card.temperature}</div>
        <div className="weatherState">
          {card.weather.charAt(0).toUpperCase() +
            card.weather.slice(1).toLowerCase()}
        </div>
        <div className="city">
          {card.city}, {card.country}
        </div>
        <div className="coordinates">
          Lat: {card.lat.toFixed(2)}, Lon: {card.lon.toFixed(2)}
        </div>
      </div>

      <div className="weatherIcon">
        {weatherIcon && <img src={weatherIcon} alt={card.weather} />}
      </div>
    </div>
  );
}

export default WeatherCard;
