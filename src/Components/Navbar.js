import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Tee's Blog</h1>
      <div className="links">
        {/* Link tags has a special functionalities  which gives the react router
         access to the page instead of sendig a fresh request to the server*/}
        <Link to="/">Home</Link>
        <Link to="/Create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
