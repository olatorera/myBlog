import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
