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
  "01d": ClearSkyDay, // Clear sky (day)
  "01n": ClearSkyNight, // Clear sky (night)
  "02d": FewCloudsDay, // Few clouds (day)
  "02n": FewCloudsNight, // Few clouds (night)
  "03d": ScatteredClouds, // Scattered clouds
  "03n": ScatteredClouds, // Scattered clouds
  "04d": BrokenClouds, // Broken/Overcast clouds
  "04n": BrokenClouds, // Broken/Overcast clouds
  "09d": ShowerRain, // Shower rain
  "09n": ShowerRain, // Shower rain
  "10d": RainDay, // Rain (day)
  "10n": RainNight, // Rain (night)
  "11d": Thunderstorm, // Thunderstorm
  "11n": Thunderstorm, // Thunderstorm
  "13d": Snow, // Snow
  "13n": Snow, // Snow
  "50d": Mist, // Mist/Fog/Haze
  "50n": Mist, // Mist/Fog/Haze
};

interface WeatherCardProps {
  data: {
    city: string;
    country: string;
    temperature: string;
    weather: string;
    icon: string;
    lat: number;
    lon: number;
  };
  isRecent: boolean;
}

function WeatherCard({ data, isRecent }: WeatherCardProps) {
  const weatherIcon =
    weatherIcons[data.icon as keyof typeof weatherIcons] || null;

  return (
    <div className={`weatherCard ${isRecent ? "recent" : ""}`}>
      <div className="leftContent">
        <div className="temperature">{data.temperature}</div>
        <div className="weatherState">
          {data.weather.charAt(0).toUpperCase() +
            data.weather.slice(1).toLowerCase()}
        </div>
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
