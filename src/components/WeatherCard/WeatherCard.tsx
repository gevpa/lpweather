import WeatherIcon from "../../assets/WeatherIcons/ClearSkyDay.svg";

function WeatherCard({ data }: { data: any }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {/* //TODO: Change these */}
      <div>
        {data.city}, {data.country}
      </div>
      <div>{data.temperature}</div>
      <div>
        {data.weather === "Sunny" ? <img src={WeatherIcon}></img> : <span />}
      </div>
    </div>
  );
}

export default WeatherCard;
