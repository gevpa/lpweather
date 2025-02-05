import Header from "./HeaderSection/Header";
import Tagline from "./TaglineSection/Tagline";

function HeaderAndTagline() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <Tagline />
    </div>
  );
}

export default HeaderAndTagline;
