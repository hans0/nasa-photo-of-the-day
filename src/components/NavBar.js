import React from "react";
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <h3>NASA Photo of the Day</h3>
      <div className="container">
        <div>Home</div>
        <div>Yesterday</div>
      </div>
    </nav>
  )
}

export default NavBar;