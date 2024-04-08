import React from 'react'
import { useState } from 'react'
import { ReactPropTypes } from 'react'
import emptyStar from '../../Assets/images/stars/empty_star.png'
import redStar from '../../Assets/images/stars/red_star.png'

function Rating({ rating }) {
  const totalStars = 5
  const clientNote = parseInt(rating)
  const emptyStars = totalStars - clientNote

  return (
    <div className="stars-wrapper">
      {[...Array(clientNote)].map((e, i) => (
        <img
          className="stars-notation"
          key={'full-star-' + i}
          src={redStar}
          alt="score client"
        />
      ))}

      {[...Array(emptyStars)].map((e, i) => (
        <img
          className="stars-notation"
          key={'empty-star-' + i}
          src={emptyStar}
          alt="Empty Star"
        />
      ))}
    </div>
  )
}

export default Rating
