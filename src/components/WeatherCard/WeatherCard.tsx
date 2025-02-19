import WeatherIcon from "../../assets/WeatherIcons/ClearSkyDay.svg";
import "../WeatherCard/weatherCard.css";
import "../../constants/constants.css";

function WeatherCard({ data }: { data: any }) {
  return (
    <div className="weatherCard">
      <div className="leftContent">
        <div className="temperature">{data.temperature}</div>
        <div className="city">
          {data.city}, {data.country}
        </div>
      </div>

      <div className="weatherIcon">
        {data.weather === "Sunny" ? <img src={WeatherIcon}></img> : <span />}
      </div>
    </div>
  );
}

export default WeatherCard;
