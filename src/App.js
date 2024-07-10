import logo from "./logo.svg";
import "./App.css";
import Books from "./components/Books";
import Books1 from "./components/Books1";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      {/* <Books /> */}
      <Books1 />
      <Map />
    </div>
  );
}

export default App;
