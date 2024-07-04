import React, { useState } from "react";

// styles -- images -- Data
import Paysage from "../../Assets/images/Paysage.png";
import "../../Styles/5.Pages/Apropos.scss/Style_Apropos.scss";
import arrow_back from "../../Assets/images/Arrows/arrow_back_ios-24px 2.png";
import Apropos_data from "../../Assets/Apropos_data/Apropos.json";

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="rank">
        {title}
        <button onClick={() => setToggle(!toggle)}>
          <img
            className={toggle ? "arrow-back" : "arrow"}
            src={arrow_back}
            alt="ouvrir"
          />
        </button>
      </div>
      <div className={toggle ? "annonce-descriptionP" : "annonce-clear"}>
        {Array.isArray(content)
          ? content.map((item, index) => <p key={index}>{item}</p>)
          : content}
      </div>
    </div>
  );
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
