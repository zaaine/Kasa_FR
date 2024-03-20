import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import Page_Annonce from '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss';
import Home from "../Home";

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
            <p className="annonce-name">{value.host.name}</p>
            <img className="annonce-photo" src={value.host.picture} alt="photo-hosting" />
        </div>
            <p className="annonce-location">{value.location} </p>
        </div>
        
        <section className="contenaire_comments">
        <div className="annonce-tags"> {value.tags} </div>

        <div className="annonce-rating"> {value.rating} </div>
        </section>

        <section className="box-description-equipments"> 
        <div >
        <div className="contenaire_description"> Description </div>
        <div className="annonce-description" >{value.description}</div>
        </div>

        <div>
        <div className="contenaire_equipments">Équipements</div>
        <div className="annonce-equipments">{value.equipments} </div>
        </div>
        </section>
        
        </div>
    )
}

export default AnnonceLogement