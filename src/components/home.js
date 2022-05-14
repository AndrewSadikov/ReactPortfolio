const Home = (props) => {
  return (
    <div className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <img
          className="main-logo"
          alt=""
          src={require("../images/avatar.png")}
        ></img>
        <h2 className="main-subtitle">
          Hi, I am <span className="gold">Andrew Sadikov</span>
        </h2>
        <h1 className="main-title">Creative Full Stack Developer</h1>
        <h3 className="main-smalltitle">
          I design and code beautifully simple things, and I love what I do
        </h3>
      </section>
    </div>
  );
};

export default Home;
