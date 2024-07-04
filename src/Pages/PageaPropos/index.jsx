import React, { useState } from "react";

// styles -- images -- Data
import Paysage from "../../Assets/images/Paysage.png";
import "../../Styles/5.Pages/Apropos.scss/Style_Apropos.scss";
import arrow_back from "../../Assets/images/Arrows/arrow_back_ios-24px 2.png";
import Apropos_data from "../../Assets/Apropos_data/Apropos.json";

import Collapse from "../../ComponentsReact/Collapse/index";

function Apropos() {
  return (
    <div className="contenair-apropos">
      <div className="banner-apropos">
        <img className="img-apropos" src={Paysage} alt="paysage" />
      </div>

      {Apropos_data.map((data, index) => (
        <Collapse key={index} title={data.title} content={data.content} />
      ))}
      <p>Titre </p>
    </div>
  );
}

export default Apropos;
