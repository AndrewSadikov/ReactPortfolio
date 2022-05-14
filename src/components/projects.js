const Projects = (props) => {
  return (
    <div className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h1>Projects:</h1>
      </section>
    </div>
  );
};

export default Projects;
