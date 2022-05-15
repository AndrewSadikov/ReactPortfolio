const ProjectCard = (props) => {
  return (
    <div className="card">
      <p>{props.name}</p>
      <p>{props.about}</p>
      <a href={props.live} target="_blank" rel="noreferrer">
        Live App
      </a>
      <a href={props.code} target="_blank" rel="noreferrer">
        Code
      </a>
    </div>
  );
};

export default ProjectCard;
