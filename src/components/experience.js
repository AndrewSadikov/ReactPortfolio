const Experience = (props) => {
  return (
    <div className="container">
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
