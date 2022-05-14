const Experience = (props) => {
  return (
    <div className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h1>What I've Done:</h1>
      </section>
    </div>
  );
};

export default Experience;
