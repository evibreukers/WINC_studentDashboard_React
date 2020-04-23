import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../src/assets/img/winclogo.png";

function Navigation({ darkMode, switchDark }) {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  };

  const linkActive = {
    color: "#fc0388",
    cursor: "pointer",
  };

  const linkStyleDark = {
    color: "rgb(130, 158, 199)",
    textDecoration: "none",
    cursor: "pointer",
  };

  const light = (
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
      <button onClick={switchDark}>darkmode</button>
    </ul>
  );

  const dark = (
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/home" style={linkStyleDark} activeStyle={linkActive}>
          DASHBOARD
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/assignments"
          style={linkStyleDark}
          activeStyle={linkActive}
        >
          ASSIGNMENTS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/students" style={linkStyleDark} activeStyle={linkActive}>
          STUDENTS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/newstudent"
          style={linkStyleDark}
          activeStyle={linkActive}
        >
          + ADD NEW STUDENT
        </NavLink>
      </li>
      <button onClick={switchDark}>darkmode</button>
    </ul>
  );

  return (
    <div className="navWrapper">
      <h1 className="nav-title">STUDENT DASHBOARD</h1>
      {darkMode ? dark : light}

      <img className="logo" src={Logo} alt="problem?" />
    </div>
  );
}

export default Navigation;
