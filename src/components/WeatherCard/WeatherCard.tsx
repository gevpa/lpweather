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

function WeatherCard({ data }: { data: any }) {
  return (
    <div className="weatherCard">
      <div className="leftContent">
        <div className="temperature">{data.temperature}</div>
        <div className="weatherState">
          {data.weather === "Broken clouds" ? data.weather : <span />}
          {data.weather === "Clear sky day" ? data.weather : <span />}
          {data.weather === "Clear sky night" ? data.weather : <span />}
          {data.weather === "Few clouds day" ? data.weather : <span />}
          {data.weather === "Few clouds night" ? data.weather : <span />}
          {data.weather === "Mist" ? data.weather : <span />}
          {data.weather === "Rain day" ? data.weather : <span />}
          {data.weather === "Rain night" ? data.weather : <span />}
          {data.weather === "Shower rain" ? data.weather : <span />}
          {data.weather === "Snow" ? data.weather : <span />}
          {data.weather === "Scattered clouds" ? data.weather : <span />}
          {data.weather === "Thunderstorm" ? data.weather : <span />}
        </div>
        <div className="city">
          {data.city}, {data.country}
        </div>
      </div>

      <div className="weatherIcon">
        {data.weather === "Broken clouds" ? (
          <img src={BrokenClouds}></img>
        ) : (
          <span />
        )}
        {data.weather === "Clear sky day" ? (
          <img src={ClearSkyDay}></img>
        ) : (
          <span />
        )}
        {data.weather === "Clear sky night" ? (
          <img src={ClearSkyNight}></img>
        ) : (
          <span />
        )}
        {data.weather === "Few clouds day" ? (
          <img src={FewCloudsDay}></img>
        ) : (
          <span />
        )}
        {data.weather === "Few clouds night" ? (
          <img src={FewCloudsNight}></img>
        ) : (
          <span />
        )}
        {data.weather === "Mist" ? <img src={Mist}></img> : <span />}
        {data.weather === "Rain day" ? <img src={RainDay}></img> : <span />}
        {data.weather === "Rain night" ? <img src={RainNight}></img> : <span />}
        {data.weather === "Shower rain" ? (
          <img src={ShowerRain}></img>
        ) : (
          <span />
        )}
        {data.weather === "Snow" ? <img src={Snow}></img> : <span />}
        {data.weather === "Scattered clouds" ? (
          <img src={ScatteredClouds}></img>
        ) : (
          <span />
        )}
        {data.weather === "Thunderstorm" ? (
          <img src={Thunderstorm}></img>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
