import React, { useState } from "react";

// Loads data one object at a time from the experienceData file.
const ExperienceCard = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="exp-card">
      <div className="exp-card-top">
        <div>
          <h1 className="exp-card-title">{props.name}</h1>
          <h3 className="exp-card-subtitle">{props.title}</h3>
        </div>
        <div style={{ textAlign: "right" }}>
          <h3 className="exp-card-subtitle">{props.location}</h3>
          <h3 className="exp-card-subtitle">{props.dates}</h3>
        </div>
      </div>
      <p className={props.darkMode ? "exp-card-about" : "exp-card-about-dark"}>
        {readMore ? `${props.about} ` : `${props.about.substring(0, 200)}... `}
        <button
          className={props.darkMode ? "read-more-btn" : "read-more-btn-dark"}
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "show less" : "read more"}
        </button>
      </p>
    </div>
  );
};

export default ExperienceCard;
