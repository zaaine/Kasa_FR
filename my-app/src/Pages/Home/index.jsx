import React from 'react'
// import { Form, Link } from 'react-router-dom'

// composants React
// import home from '../../Assets/images/home.png'
import Card from '../../ComponentsReact/Card'

// Styles --
import annonces from '../../Assets/AnnoncesLogement/annonces.json'
import '../../Styles/5.Pages/Home.scss/styles_Home.scss'
import '../../Styles/4.Components/Card.scss/Styles_Card.scss'

function Home() {
  return (
    <div className="contenaire_home">
      <div className="banner banner_title">Chez vous, partout et ailleurs</div>

      <div className="cards-container">
        {annonces.map((annonce, index) => (
          <Card
            key={`${annonce.title}-${index}`}
            id={annonce.id}
            cover={annonce.cover}
            title={annonce.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
