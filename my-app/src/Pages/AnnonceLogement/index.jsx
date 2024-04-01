// React
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

// Files
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss'
import arrow_back from '../../Assets/images/Arrows/arrow_back_ios-24px 2.png'

// componements
import Slider from '../../ComponentsReact/Carousel'

function AnnonceLogement() {
  const [value, setValue] = useState('')
  const params = useParams()
  const annonceID = params.id

  const [toggle, setToggle] = useState(false)
  const toggleFunction = () => {
    setToggle(!toggle)
  }

  const [view, setView] = useState(false)
  const toggleFunctionBis = () => {
    setView(!view)
  }

  const [imageSlider, setImageSlider] = useState([])

  useEffect(() => {
    annonces.map((annonce) => {
      if (annonceID === annonce.id) {
        setValue(annonce), setImageSlider(annonce.pictures)
      }
    })
  }, [])

  if (value === '') {
    return
  }

  return (
    <div className="annonce-contenaire">
      {/* // Partie 1 carroussel */}

      <Slider imageSlider={imageSlider} />

      {/* Partie 2 */}
      <div>
        <div className="contenaire_titre">
          <h1 className="annonce-title">{value.title} </h1>
          <div className="contenaire_identite">
            <p className="annonce-name">{value.host.name}</p>
            <img
              className="annonce-photo"
              src={value.host.picture}
              alt="photo-hosting"
            />
          </div>
        </div>
        <p className="annonce-location">{value.location} </p>
      </div>

      <section className="contenaire_comments">
        <div className="contenaire_tags">
          {' '}
          {value.tags.map((tag, i) => (
            <p key={i} className="annonce-tags">
              {tag}
            </p>
          ))}
        </div>

        <div className="stars-wrapper">
          <Rating
            className="stars-notation"
            initialValue={value.rating}
            readonly={true}
            fillClassName="stars-notation"
            fillColor="#ff6060"
            value={value.rating}
            size={'30px'}
          />
        </div>
      </section>

      {/* Partie 3 */}
      <section className="box-description-equipments">
        <div>
          <div className="contenaire_description">
            <div> Description </div>
            <div className="tools">
              <img
                onClick={toggleFunction}
                className={toggle ? 'arrow' : 'arrow-back'}
                src={arrow_back}
                alt="ouvrir"
              />
            </div>
          </div>
          <div className={toggle ? 'annonce-description' : 'annonce-clear'}>
            {value.description}
          </div>
        </div>

        <div>
          <div className="contenaire_equipments">
            <div>Équipements</div>
            <div className="tools">
              <img
                onClick={toggleFunctionBis}
                className={view ? 'arrow' : 'arrow-back'}
                src={arrow_back}
                alt="ouvrir"
              />
            </div>
          </div>
          <div>
            <div className={view ? 'annonce-equipments' : 'annonce-clear'}>
              {value.equipments.map((equipment, i) => (
                <div key={i}>
                  <p className="equipement">{equipment}</p>
                </div>
              ))}{' '}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AnnonceLogement
