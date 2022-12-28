import React from "react";
import { NavLink } from "react-router-dom";
import "./MyNavbar.scss";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand text-warning">
          Bekzhan Satiev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNav"
          aria-controls="myNav"
          area-expanded="false"
          area-label="toggler navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-uppercase" id="myNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/works">
                works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/education">
                education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/feedbacks">
                feedbacks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mystack">
                Stack
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/experience">
                experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/soft-skills">
                languages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/assistants">
                assistants
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/price">
                price
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
