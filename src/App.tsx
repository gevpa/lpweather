import "./app.css";
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import Footer from "./components/Footer/Footer";
import HeaderAndTagline from "./components/HeaderAndTagline/HeaderAndTagline";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <HeaderAndTagline />
        {/* TODO: Later we will create here a section for weather search, one for weather cards and finally one for the footer. */}
        <SearchBar />
        <CardsWrapper />
        <Footer />
      </div>
    </>
  );
}

export default App;
