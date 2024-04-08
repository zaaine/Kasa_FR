import React from 'react'
import styles_Footer from '../../Styles/4.Components/Footer.scss/styles_Footer.scss'
import LOGO from '../../Assets/images/LOGO.png'

function footer() {
  return (
    <div className="footer_container">
      <img src={LOGO} alt="logo Kasa" className="footer_logo" />
      <p className="footer_text"> © 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default footer
