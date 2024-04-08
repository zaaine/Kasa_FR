import React from 'react'
import { useState } from 'react'
import { ReactPropTypes } from 'react'

import emptyStar from '../../Assets/images/stars/empty_star.png'
import redStar from '../../Assets/images/stars/red_star.png'

function Rating(props) {
  const ranges = [1, 2, 3, 4, 5]
  const rating = props

  return (
    <div className="stars-wrapper">
      {ranges.map((range) =>
        ranges >= rating ? (
          <img
            key={range.toString()}
            className="stars-notation"
            src={emptyStar}
            alt="star empty"
            name="score"
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
