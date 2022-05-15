const Projects = (props) => {
  return (
    <div id="Projects" className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h3 className={props.darkMode ? "wip-title" : "wip-title-dark"}>
          Projects
        </h3>
        <p className="wip-p">
          This is still a work in progress. Check back later for updates!
        </p>
        <div className="cards-container">{props.cards}</div>
      </section>
    </div>
  );
};

export default Projects;
