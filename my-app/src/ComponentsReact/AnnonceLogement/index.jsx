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
        <div className="contenaire-annonce"> 
        
        <div>
            <img src={value.cover} alt="" />
        </div>

        <div>
        <div>
            <h1>{value.title} </h1>
            <p>{value.location} </p>
        </div>
            <p>{value.host.name}</p>
            <img src={value.host.picture} alt="photo-hosting" />
        </div>
        
        <div> {value.tags} </div>
        <div> {value.rating} </div>

        <div>{value.description}</div>
        <div>{value.equipments} </div>
         </div>
    )
}

export default AnnonceLogement