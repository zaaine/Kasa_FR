import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import redStar from "../../Assets/images/stars/redStar.png";
import star from "../../Assets/images/stars/star.png";

function Rating({ rating }) {
  const totalStars = 5;
  const clientNote = parseInt(rating);
  const emptyStars = totalStars - clientNote;

  return (
    <div className="stars-wrapper">
      {[...Array(clientNote)].map((e, i) => (
        <img
          className="stars-notation"
          key={"full-star-" + i}
          src={redStar}
          alt="score client"
        />
      ))}

      {[...Array(emptyStars)].map((e, i) => (
        <img
          className="stars-notation starsE"
          key={"empty-star-" + i}
          src={star}
          alt="Empty Star"
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

Rating.defaultProps = {
  rating: "",
};

export default Rating;
