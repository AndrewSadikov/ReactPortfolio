import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = (props) => {
  return (
    <div className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <img
          className="home-logo"
          alt=""
          src={require(props.darkMode
            ? "../images/avatardark.png"
            : "../images/avatar.png")}
        ></img>
        <div className="home-sm">
          <a
            href="https://github.com/AndrewSadikov"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="home-sm-icon" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrewsadikov/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="home-sm-icon" icon={faLinkedin} />
          </a>
        </div>
        <h1 className="home-subtitle">
          Hi, I am{" "}
          <span className={props.darkMode ? "blue" : "gold"}>
            Andrew Sadikov
          </span>
        </h1>
        <h1 className="home-title">Full Stack Software Engineer</h1>
        <h1
          className={
            props.darkMode ? "home-smalltitle" : "home-smalltitle-dark"
          }
        >
          I code beautiful, simple things and I love what I do.
        </h1>
      </section>
    </div>
  );
};

export default Home;
