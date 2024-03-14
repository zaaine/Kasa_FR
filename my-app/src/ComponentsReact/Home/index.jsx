import React from "react"
import { Form, Link } from "react-router-dom"

import styles_Home from '../../Styles/5.Pages/Home.scss/styles_Home.scss';
import home from '../../Assets/images/home.png';


function Home (){
    return (
        <div className="contenaire_home"> 
        <div className="banner" >  
        <img className="banner_img" src={home} alt="photo paysage" />
        <p className="banner_title">Chez vous, partout et ailleurs </p>
        </div>
        <div> contenaire annonces </div>
        
        
        
        </div>
    )
}

export default Home