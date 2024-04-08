import React from 'react'
import { useState } from 'react'
import { ReactPropTypes } from 'react'
import emptyStar from '../../Assets/images/stars/empty_star.png'
import redStar from '../../Assets/images/stars/red_star.png'

const Rating = (props) => {
  const scale = props.scale
  const ranges = [1, 2, 3, 4, 5]

  return (
    <div className="stars-wrapper">
      {ranges.map((range) =>
        scale >= range ? (
          <img
            key={range.toString()}
            className="stars-notation"
            src={emptyStar}
            alt="star empty"
          />
        ) : (
          <img
            key={range.toString()}
            className="stars-notation"
            src={redStar}
            alt="star"
          />
        ),
      )}
    </div>
  )
}

export default Rating
