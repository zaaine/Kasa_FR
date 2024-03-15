// composant React
import React from "react";
import { Link } from "react-router-dom";


// styles -- images
import Paysage from '../../Assets/images/Paysage.png'
import Style_Apropos from '../../Styles/5.Pages/Apropos.scss/Style_Apropos.scss'



function Apropos(){
    return (
        <div className="contenair-apropos" > 
        <div className="banner-apropos">  
        <img className="img-apropos" src={Paysage} alt="photo paysage" />
        </div>

        <div className="rank">  <p>Fiabilité </p> <p className="icones-apropos"> ^ </p> </div>
        <div className="rank"> <p>Respect </p> <p className="icones-apropos"> ^ </p></div>
        <div className="rank"> <p>Service </p> <p className="icones-apropos"> ^ </p></div>
        <div className="rank"> <p>Sécurité </p> <p className="icones-apropos"> ^ </p></div>

        </div>
    )
}

export default Apropos