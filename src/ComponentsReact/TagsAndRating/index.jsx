import React from "react";
import Rating from "../../ComponentsReact/Rating";

import "../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss";

function TagsAndRating({ tags, rating }) {
  return (
    <section className="contenaire_comments">
      <div className="contenaire_tags">
        {tags.map((tag, i) => (
          <p key={i} className="annonce-tags">
            {tag}
          </p>
        ))}
      </div>
      <Rating rating={rating} />
    </section>
  );
}

export default TagsAndRating;
