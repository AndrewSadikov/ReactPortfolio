const Projects = (props) => {
  return (
    <div id="Projects" className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h3 className={props.darkMode ? "wip-title" : "wip-title-dark"}>
          Projects
        </h3>
        <div className="cards-container">{props.cards}</div>
      </section>
    </div>
  );
};

export default Projects;
