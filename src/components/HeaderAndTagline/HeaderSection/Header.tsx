import weatherLogo from "../../../assets/images/weatherLogo.svg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img
        src={weatherLogo}
        alt="lpweather-logo"
        className="logo"
        width={40}
        height={40}
      />
      <h1 className="name">lpweather</h1>
    </div>
  );
}

export default Header;
