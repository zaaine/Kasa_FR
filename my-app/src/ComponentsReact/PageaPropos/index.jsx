// composant React

import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// styles -- images
import Paysage from '../../Assets/images/Paysage.png'
import '../../Styles/5.Pages/Apropos.scss/Style_Apropos.scss'
import arrow_back from '../../Assets/images/Arrows/arrow_back_ios-24px 2.png'

import Apropos_data from '../../Assets/Apropos_data/Apropos.json'

function Apropos() {
  const [toggle, setToggle] = useState(false)

  const toggleFunction = () => {
    setToggle(!toggle)
  }

  const datasContent = Apropos_data.map((data) => data.content)

  return (
    <div className="contenair-apropos">
      <div className="banner-apropos">
        <img className="img-apropos" src={Paysage} alt="paysage" />
      </div>

      <div className="rank">
        {' '}
        <p>Fiabilité </p>
        <button onClick={toggleFunction} type="button" className="button">
          <img
            className={toggle ? 'arrow' : 'arrow-back'}
            src={arrow_back}
            alt="ouvrir"
          />
        </button>
      </div>
      <div className={toggle ? 'annonce-descriptionP' : 'annonce-clear'}>
        {datasContent[0]}{' '}
      </div>

      <div className="rank">
        {' '}
        <p>Respect </p>
        <button onClick={toggleFunction} type="button" className="button">
          <img
            className={toggle ? 'arrow' : 'arrow-back'}
            src={arrow_back}
            alt="ouvrir"
          />
        </button>
      </div>
      <div className={toggle ? 'annonce-descriptionP' : 'annonce-clear'}>
        {datasContent[1]}{' '}
      </div>

      <div className="rank">
        {' '}
        <p>Service </p>
        <button onClick={toggleFunction} type="button" className="button">
          <img
            className={toggle ? 'arrow' : 'arrow-back'}
            src={arrow_back}
            alt="ouvrir"
          />
        </button>
      </div>
      <div className={toggle ? 'annonce-descriptionP' : 'annonce-clear'}>
        {datasContent[2]}{' '}
      </div>

      <div className="rank">
        {' '}
        <p>Sécurité </p>
        <button onClick={toggleFunction} type="button" className="button">
          <img
            className={toggle ? 'arrow' : 'arrow-back'}
            src={arrow_back}
            alt="ouvrir"
          />
        </button>
      </div>
      <div className={toggle ? 'annonce-descriptionP' : 'annonce-clear'}>
        {datasContent[3]}{' '}
      </div>
    </div>
  )
}

export default Apropos
