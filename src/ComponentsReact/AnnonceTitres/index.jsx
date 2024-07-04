import React from 'react'

import '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss'

function AnnonceTitres({ title, host, location }) {
  return (
    <div>
      <div className="contenaire_titre">
        <h1 className="annonce-title">{title} </h1>
        <div className="contenaire_identite">
          <p className="annonce-name">{host.name}</p>
          <img
            className="annonce-photo"
            src={host.picture}
            alt="présentation du logement"
          />
        </div>
      </div>
      <p className="annonce-location">{location} </p>
    </div>
  )
}

export default AnnonceTitres
