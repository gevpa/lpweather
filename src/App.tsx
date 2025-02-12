import "./app.css";
import HeaderAndTagline from "./components/HeaderAndTagline/HeaderAndTagline";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <HeaderAndTagline />
        {/* TODO: Later we will create here a section for weather search, one for weather cards and finally one for the footer. */}
        <SearchBar />
      </div>
    </>
  );
}

export default App;
