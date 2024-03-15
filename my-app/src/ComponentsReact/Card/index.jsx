// Composants React
import PropTypes from 'prop-types'

// Styles --- contenus
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import Styles_Card from '../../Styles/4.Components/Card.scss/Styles_Card.scss'



function Card ({id,cover,title}){

    return(
      <div className='card-wrapper' id={id}>
        <img src={cover} alt="cover-annonces" className='card-img' />
        <p className='card-text'>{title}</p>

      </div>
    )

    Card.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
      }
}

export default Card