import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

// images
import arrowLeft from '../../Assets/images/Arrows/arrowRight.png'
import arrowRight from '../../Assets/images/Arrows/arrowLeft.png'

// Styles
import '../../Styles/4.Components/Carousel.scss/Style_carrousel.scss'

function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === imageSlider.length - 1) {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) {
      setCurrentIndex(imageSlider.length - 1)
    }
  }

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carrousel"
    >
      {imageSlider.length > 1 && (
        <>
          <img
            src={arrowRight}
            alt="Suivant"
            onClick={nextSlide}
            className="carrousel_arrow carrousel_arrow_right"
          />
          <img
            src={arrowLeft}
            alt="Précédent"
            onClick={prevSlide}
            className="carrousel_arrow carrousel_arrow_left"
          />

          {document.body.clientWidth > 768 && (
            <p className="pagination">
              {currentIndex + 1} / {imageSlider.length}{' '}
            </p>
          )}
        </>
      )}
    </section>
  )
}

Slider.propTypes = {
  imageSlider: PropTypes.string.isRequired,
}

Slider.defaultProps = {
  imageSlider: '',
}

export default Slider
