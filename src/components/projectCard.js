// Loads data one object at a time from the projectData file.

const ProjectCard = (props) => {
  return (
    <div className="proj-card">
      <h1 className="proj-title">{props.name}</h1>
      <div className="proj-info">
        <img
          className="proj-image"
          alt=""
          src={require(`../images/${props.image}`)}
        />
        <p
          className={props.darkMode ? "exp-card-about" : "exp-card-about-dark"}
        >
          {props.about}
        </p>
      </div>
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
  );
};

export default ProjectCard;
