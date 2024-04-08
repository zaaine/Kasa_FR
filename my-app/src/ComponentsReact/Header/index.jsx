import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../Assets/images/LOGO.png'

// import styles_Header from '../../Styles/5.Pages/StyleHeader/styles_Header.scss'

import styles_Header from '../../Styles/4.Components/Header.scss/styles_Header.scss'

function Header() {
  return (
    <div className="headerContainer">
      <div className="navBar">
        <img className="logo" src={LOGO} />
      </div>
      <div className="links">
        <a className="linkAccueil" to="/" href="/">
          {' '}
          Accueil
        </a>
        <a className="linkApropos" to="/Apropos" href="Apropos">
          {' '}
          A Propos
        </a>
      </div>
    </div>
  )
}

export default Header
