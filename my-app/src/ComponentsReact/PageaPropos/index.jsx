// composant React
import React from "react";
import { Link } from "react-router-dom";


// styles -- images
import Paysage from '../../Assets/images/Paysage.png'
import Style_Apropos from '../../Styles/5.Pages/Apropos.scss/Style_Apropos.scss'
import arrow_back from '../../Assets/images/Arrows/arrow_back_ios-24px 2.png'


function Apropos(){
    return (
        <div className="contenair-apropos" > 
        <div className="banner-apropos">  
        <img className="img-apropos" src={Paysage} alt="photo paysage" />
        </div>

        <div className="rank">  <p>Fiabilité </p> 
        <img   className="icones-apropos"src={arrow_back} alt="" />  </div>

        <div className="rank">  <p>Respect </p> 
        <img   className="icones-apropos"src={arrow_back} alt="" />  </div>

        <div className="rank">  <p>Service </p> 
        <img   className="icones-apropos"src={arrow_back} alt="" />  </div>

        <div className="rank">  <p>Sécurité </p> 
        <img   className="icones-apropos"src={arrow_back} alt="" />  </div>

        

        </div>
    )
}

export default Apropos