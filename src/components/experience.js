const Experience = (props) => {
  return (
    <div id="Experience" className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h3 className={props.darkMode ? "wip-title" : "wip-title-dark"}>
          Work Experience
        </h3>
        <div className="cards-container">{props.cards}</div>
      </section>
    </div>
  );
};

export default Experience;
