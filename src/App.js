import logo from "./logo.svg";
import "./App.css";
import Books from "./components/Books";
import Home from "./components/Home";
import Map from "./components/Map";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
