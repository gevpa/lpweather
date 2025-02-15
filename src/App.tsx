import "./app.css";
import CardsWrapper from "./pages/Home/CardsWrapper/CardsWrapper";
import Footer from "./pages/Home/Footer/Footer";
import HeaderAndTagline from "./pages/Home/HeaderAndTagline/HeaderAndTagline";
import SearchBar from "./pages/Home/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <HeaderAndTagline />
        <SearchBar />
        <CardsWrapper />
        <Footer />
      </div>
    </>
  );
}

export default App;
