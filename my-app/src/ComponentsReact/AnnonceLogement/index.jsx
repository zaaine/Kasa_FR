// React 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Rating } from 'react-simple-star-rating';

// Files
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import Page_Annonce from '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss';
import arrow_back from '../../Assets/images/Arrows/arrow_back_ios-24px 2.png'
import Home from "../Home";



function AnnonceLogement (){

const [value, setValue] = useState("")
const params = useParams()
const  annonceID = params.id

// console.log(params.id)

    const [toggle, setToggle] = useState(false)

    const toggleFunction = () => {
        setToggle(!toggle)
    }

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

// Partie carroussel
        <div className="annonce-contenaire"> 
        
        <div className="annonce-imgs">
            <img className="annonce-img" src={value.cover} alt="" />
        </div>

        <div>
{/* Partie titre à mettre dans un componement  */}
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
        <div className="contenaire_tags"> {value.tags.map((tag,i) => (
            <p key={i} className="annonce-tags">{tag}</p>
        ))} 
        
        </div>
        
        <div className="stars-wrapper">
     
        <Rating  className="stars-notation" 
                 initialValue={value.rating} 
                 readonly={true}
                 fillClassName='stars-notation'
                 fillColor="#ff6060"
                 value={value.rating}
                 size={'30px'}   
                 />
        </div>
        </section>
{/* Partie description à mettre dans un componement */}
        <section className="box-description-equipments"> 
        <div >
        <div className="contenaire_description"> 
        <div > Description </div>
        <img onClick={toggleFunction} className={toggle ? "arrow" : "arrow-back"} src={arrow_back} alt="ouvrir"/>
        </div>
        <div className={toggle ? "annonce-description" : "annonce-clear"}>{value.description}</div>
        </div>

        <div>
        <div className="contenaire_equipments">
        <div >Équipements</div>
        <img onClick={toggleFunction} className={toggle ? "arrow" : "arrow-back"} src={arrow_back} alt="ouvrir"/>
        </div>
        <div>
        <div className={toggle ? "annonce-equipments" : "annonce-clear"}>{value.equipments.map((equipment,i)=>(
            <ul key={i}>
                <li>{equipment}</li>
            </ul>
        ))} </div>
        </div>
        </div>
        </section>
        
        {/* <App/> */}

        </div>

    )
}

export default AnnonceLogement