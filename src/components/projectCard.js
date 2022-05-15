const ProjectCard = (props) => {
  return (
    <div className="proj-card">
      <img
        className="proj-image"
        alt=""
        src={require(`../images/${props.image}`)}
      />
      <div className="proj-info">
        <h1 className="proj-title">{props.name}</h1>
        <p
          className={props.darkMode ? "exp-card-about" : "exp-card-about-dark"}
        >
          {props.about}
        </p>
        <div className="proj-button-section">
          <a href={props.live} target="_blank" rel="noreferrer">
            <button
              className={
                props.darkMode ? "proj-button-live" : "proj-button-live-dark"
              }
            >
              Live App
            </button>
          </a>
          <a href={props.code} target="_blank" rel="noreferrer">
            <button
              className={
                props.darkMode ? "proj-button-code" : "proj-button-code-dark"
              }
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
