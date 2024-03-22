import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import Page_Annonce from '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss';
import Home from "../Home";

import arrow_back from '../../Assets/images/Arrows/arrow_back_ios-24px 2.png'

function AnnonceLogement (){

const [value, setValue] = useState("")
const params = useParams()
const  annonceID = params.id

// console.log(params.id)

useEffect(() => { 
    annonces.map ((annonce, index) => {
        if (annonceID === annonce.id){
            setValue (annonce)
        }
    
    })

    }, []);

    if(value === "") {
        return ;
    }
    
   
    return (
        <div className="annonce-contenaire"> 
        
        <div className="annonce-imgs">
            <img className="annonce-img" src={value.cover} alt="" />
        </div>

        <div>
        <div className="contenaire_titre">
            <h1 className="annonce-title">{value.title} </h1>
            <div className="contenaire_identite">
            <p className="annonce-name">{value.host.name}</p>
            <img className="annonce-photo" src={value.host.picture} alt="photo-hosting" />
            </div>
        </div>
            <p className="annonce-location">{value.location} </p>
        </div>
        
        <section className="contenaire_comments">
        <div className="contenaire_tags"> 
        <div className="annonce-tags"> {value.tags[0]} </div>
        <div className="annonce-tags"> {value.tags[1]} </div>
        </div>
        
        <div>
        <div className="annonce-rating"> {value.rating} </div>
        </div>
        </section>

        <section className="box-description-equipments"> 
        <div >
        <div className="contenaire_description"> 
        <div > Description </div>
        <img className="arrow-back" src={arrow_back} alt="ouvrir"/>
        </div>
        <div className="annonce-description" >{value.description}</div>
        </div>

        <div>
        <div className="contenaire_equipments">
        <div >Équipements</div>
        <img className="arrow-back" src={arrow_back} alt="ouvrir"/>
        </div>
        <div>
        <div className="annonce-equipments">{value.equipments} </div>
        </div>
        </div>
        </section>
        
        </div>
    )
}

export default AnnonceLogement