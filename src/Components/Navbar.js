import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">4 Wheel Barbers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <a href="mailto:4wheelbarbers@yahoo.com" className="navContact">4wheelbarbers@yahoo.com</a>
            <a href="tel:+447756235725" className="navContact">07756 235 725</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


