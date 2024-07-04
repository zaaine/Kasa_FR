// Composants React
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Styles --- contenus
import '../../Styles/4.Components/Card.scss/Styles_Card.scss'

function Card({ id, cover, title }) {
  return (
    <Link className="card-link" to={`/AnnonceLogement/${id}`}>
      <div className="card-wrapper">
        <img src={cover} alt="cover-annonces" className="card-img" />
        <p className="card-text">{title}</p>
      </div>
    </Link>
  )

  Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }
}

export default Card
