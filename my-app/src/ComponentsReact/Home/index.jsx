import React from "react"
import { Form, Link } from "react-router-dom"

// composants React
import home from '../../Assets/images/home.png';
import Card from "../Card";
// Styles -- 
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import styles_Home from '../../Styles/5.Pages/Home.scss/styles_Home.scss'
import Style_card from '../../Styles/4.Components/Card.scss/Styles_Card.scss'



function Home (){
    return (
        <div className="contenaire_home"> 
        <div className="banner" >  
        <img className="banner_img" src={home} alt="photo paysage" />
        <p className="banner_title">Chez vous, partout et ailleurs </p>
        </div>


        
        <div className="cards-container">
       {annonces.map ((annonce, index)=>(
        <Card 
            
            key={`${annonce.title}-${index}`}
            id={annonce.id}
            cover={annonce.cover}
            title={annonce.title}
        />
       ))}

        </div>
        
        
        
        </div>
    )
}

export default Home