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

const weatherIcons: { [key: string]: string } = {
  "clear sky": ClearSkyDay,
  "clear sky night": ClearSkyNight,
  "few clouds": FewCloudsDay,
  "few clouds night": FewCloudsNight,
  "scattered clouds": ScatteredClouds,
  "broken clouds": BrokenClouds,
  "shower rain": ShowerRain,
  rain: RainDay,
  "rain night": RainNight,
  thunderstorm: Thunderstorm,
  snow: Snow,
  mist: Mist,
};

interface WeatherCardProps {
  data: {
    city: string;
    country: string;
    temperature: string;
    weather: string;
    lat: number;
    lon: number;
  };
  isRecent: boolean;
}

function WeatherCard({ data, isRecent }: WeatherCardProps) {
  const weatherIcon =
    weatherIcons[data.weather as keyof typeof weatherIcons] || null;

  return (
    <div className={`weatherCard ${isRecent ? "recent" : ""}`}>
      <div className="leftContent">
        <div className="temperature">{data.temperature}</div>
        <div className="weatherState">{data.weather}</div>
        <div className="city">
          {data.city}, {data.country}
        </div>
        <div className="coordinates">
          Lat: {data.lat.toFixed(2)}, Lon: {data.lon.toFixed(2)}
        </div>
      </div>

      <div className="weatherIcon">
        {weatherIcon && <img src={weatherIcon} alt={data.weather} />}
      </div>
    </div>
  );
}

export default WeatherCard;
