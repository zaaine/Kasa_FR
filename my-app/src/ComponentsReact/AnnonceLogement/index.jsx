import React from "react";
import { Link } from "react-router-dom";

import Page_Annonce from '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss';
import Home from "../Home";

function AnnonceLogement (){


    return (
        <div className="contenaire-annonce"> 
        
        <div>
            <img src="" alt="" />
            <div> prevoir le carrousel</div>
        </div>

        <div>
        <div>
            <h1>Titre </h1>
            <p>Localisation </p>
        </div>
            <p>Nom Prénom</p>
            <img src="" alt="photo" />
        </div>
        
        <div> Tags </div>
        <div> Rating </div>

        <div>Description</div>
        <div>Equipement </div>
         </div>
    )
}

export default AnnonceLogement