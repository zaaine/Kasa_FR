// Composants React
import PropTypes from 'prop-types'

// Styles --- contenus
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import Styles_Card from '../../Styles/4.Components/Card.scss/Styles_Card.scss'
import { useState, useEffect } from 'react';




 const KeepId = (e) => {
  console.log(e);
  const annonceId = (e)
  
  // enregistrer l'ID et le sauvegarder dans le local.storage pour mapper la liste et la retourner sur la page annonce. 
  const [count, setCount] = useState(localStorage.getItem('count'))
  setCount(count + annonceId)
  
  useEffect(() => {
    console.log(annonceId);
    
    localStorage.setItem("id", count.toString());
  }, []);
 
}




function Card ({id,cover,title}){

    return(
        <a to="/AnnonceLogement" href='/AnnonceLogement' >
      <div className='card-wrapper' id={id} to="/AnnonceLogement" onClick={()=> KeepId(id)}>
        <img src={cover} alt="cover-annonces" className='card-img' />
        <p className='card-text'>{title}</p>
      </div>
        </a>
    )

    Card.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
      }
}

export default Card