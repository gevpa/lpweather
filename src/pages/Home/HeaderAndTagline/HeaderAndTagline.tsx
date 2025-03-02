import Header from "./HeaderSection/Header";
import Tagline from "./TaglineSection/Tagline";

function HeaderAndTagline() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Header />
      <Tagline />
    </div>
  );
}

export default HeaderAndTagline;
