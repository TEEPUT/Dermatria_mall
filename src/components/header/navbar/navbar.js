import React from 'react';
import './navber.css';


const navber = () => {
  const openNav = () => {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
  };

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <span>Dermatria</span>
          </a>
          <div className="">
            <div className="custom_menu-btn">
              <button onClick={openNav}>
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
              <div id="myNav" className="overlay">
                <div className="overlay-content">
                  <a href="index.html">Home</a>
                  <a href="about.html">About</a>
                  <a href="shop.html">Shop</a>
                  <a href="blog.html">Blog</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default navber;
