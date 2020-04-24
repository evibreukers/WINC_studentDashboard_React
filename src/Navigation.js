import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../src/assets/img/winclogo.png";

function Navigation({ darkMode, switchDark }) {
  const linkStyle = {
    color: "rgb(146, 168, 232)",
    textDecoration: "none",
    cursor: "pointer",
  };

  const linkActive = {
    color: " white",
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
        <NavLink
          to="/home"
          style={linkStyle}
          activeStyle={linkActive}
          activeClassName="activeLink"
        >
          AVERAGE SCORES
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/assignments"
          style={linkStyle}
          activeStyle={linkActive}
          activeClassName="activeLink"
        >
          ASSIGNMENTS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/students"
          style={linkStyle}
          activeStyle={linkActive}
          activeClassName="activeLink"
        >
          STUDENTS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/newstudent"
          style={linkStyle}
          activeStyle={linkActive}
          activeClassName="activeLink"
        >
          + ADD NEW STUDENT
        </NavLink>
      </li>
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
    </ul>
  );

  return (
    <div className="navWrapper">
      <h1 className="nav-title">
        STUDENT <br /> DASHBOARD
      </h1>
      <div>{darkMode ? dark : light}</div>
      <div onClick={switchDark} className="switch">
        <div className="circle"></div>
        <i className="far fa-moon"></i>
        <i className="far fa-sun"></i>
      </div>
      <img className="logo" src={Logo} alt="problem?" />
    </div>
  );
}

export default Navigation;
