import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../Assets/images/LOGO.png";

// import styles_Header from '../../Styles/5.Pages/StyleHeader/styles_Header.scss'

import styles_Header from "../../Styles/4.Components/Header.scss/styles_Header.scss";

function Header() {
  return (
    <div className="headerContainer">
      <div className="navBar">
        <img className="logo" src={LOGO} />
      </div>
      <div className="links">
        <Link className="linkAccueil" to="/">
          {" "}
          Accueil
        </Link>
        <Link className="linkApropos" to="/Apropos">
          {" "}
          A Propos
        </Link>
      </div>
    </div>
  );
}

export default Header;
