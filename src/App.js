import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar.js";
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    // to use the router the whole file is wrapped in the router 
    // tag after iimporting it
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        {/* to determine where the link will be redirected to we use routes */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
        </ Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
