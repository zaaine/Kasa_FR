// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Files
import annonces from "../../Assets/AnnoncesLogement/annonces.json";
import "../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss";
import arrow_back from "../../Assets/images/Arrows/arrow_back_ios-24px 2.png";

// componements
import Slider from "../../ComponentsReact/Carousel";
import Error from "../Error";
import Rating from "../../ComponentsReact/Rating/index";

// Compartiments Pages
import DescriptionAndEquipments from "../../ComponentsReact/Contenaire/index";
import TagsAndRating from "../../ComponentsReact/TagsAndRating/index";
import AnnonceTitres from "../../ComponentsReact/AnnonceTitres/index";

function AnnonceLogement() {
  const [value, setValue] = useState("");
  const params = useParams();
  const annonceID = params.id;

  const [imageSlider, setImageSlider] = useState([]);

  useEffect(() => {
    annonces.map((annonce) => {
      if (annonceID === annonce.id) {
        setValue(annonce);
        setImageSlider(annonce.pictures);
      }
    });
  }, []);

  if (value === "") {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="annonce-contenaire">
      {/* // Partie 1 carroussel */}

      <Slider imageSlider={imageSlider} />

      {/* Partie 2 : Contenaire Annonce */}

      <AnnonceTitres
        title={value.title}
        host={value.host}
        location={value.location}
      />

      <TagsAndRating tags={value.tags} rating={value.rating} />

      {/* Partie 3 : Description & Equipement */}

      <DescriptionAndEquipments
        description={value.description}
        equipments={value.equipments}
      />
    </div>
  );
}

export default AnnonceLogement;
