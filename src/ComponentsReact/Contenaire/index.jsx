import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import arrow_back from "../../Assets/images/Arrows/arrow_back_ios-24px 2.png";
import annonces from "../../Assets/AnnoncesLogement/annonces.json";
import "../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss";

function DescriptionAndEquipments({ description, equipments }) {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const [view, setView] = useState(false);
  const toggleFunctionBis = () => {
    setView(!view);
  };

  return (
    <section className="box-description-equipments">
      <div>
        <div className="contenaire_description">
          <div> Description </div>
          <div className="tools">
            <img
              className={toggle ? "arrow" : "arrow-back"}
              onClick={toggleFunction}
              src={arrow_back}
              alt="cliquez pour voir le contenu"
            />
          </div>
        </div>
        <div className={toggle ? "annonce-description" : "annonce-clear"}>
          {description}
        </div>
      </div>

      <div>
        <div className="contenaire_equipments">
          <div>Équipements</div>
          <div className="tools">
            <img
              className={view ? "arrow" : "arrow-back"}
              alt="cliquez pour voir le contenu"
              src={arrow_back}
              onClick={toggleFunctionBis}
            />
          </div>
        </div>
        <div>
          <div className={view ? "annonce-equipments" : "annonce-clear"}>
            {equipments.map((equipment, i) => (
              <div key={i}>
                <p className="equipement">{equipment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionAndEquipments;
