import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../src/assets/img/winclogo.png";

export default function Navigation() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  };
  const linkActive = {
    color: "#fc0388",
    cursor: "pointer",
  };
  return (
    <div className="navWrapper">
      <h1 className="nav-title">STUDENT DASHBOARD</h1>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/home" style={linkStyle} activeStyle={linkActive}>
            DASHBOARD
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/assignments" style={linkStyle} activeStyle={linkActive}>
            ASSIGNMENTS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/students" style={linkStyle} activeStyle={linkActive}>
            STUDENTS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/newstudent" style={linkStyle} activeStyle={linkActive}>
            + ADD NEW STUDENT
          </NavLink>
        </li>
      </ul>
      <img className="logo" src={Logo} alt="problem?" />
    </div>
  );
}
