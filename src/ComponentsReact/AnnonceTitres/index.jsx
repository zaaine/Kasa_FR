import React from "react";

import "../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss";

function AnnonceTitres({ title, host, location }) {
  return (
    <div>
      <div className="contenaire_titre">
        <h1 className="annonce-title">{value.title} </h1>
        <div className="contenaire_identite">
          <p className="annonce-name">{value.host.name}</p>
          <img
            className="annonce-photo"
            src={value.host.picture}
            alt="présentation du logement"
          />
        </div>
      </div>
      <p className="annonce-location">{value.location} </p>
    </div>
  );
}

export default AnnonceTitres;
