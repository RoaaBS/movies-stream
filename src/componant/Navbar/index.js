// Navbar.js
import React from 'react';
import './index.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    return (
        <div className="navbar">
              <div class="container">
              <h2>Discover your Favourites</h2>
              <input type="text" placeholder="Search here..." name="search"  />
              <div class="icon"> <i class="fa-solid fa-sliders"></i></div>
        </div></div>
    );
};

export default Navbar;
