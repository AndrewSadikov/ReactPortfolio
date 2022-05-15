import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = (props) => {
  return (
    <nav className={props.darkMode ? "nav" : "nav-dark"}>
      <h1 className="nav-title">A.S.</h1>
      <ul className="nav-menu">
        <li className="nav-link" onClick={() => props.setMainState("Home")}>
          Home
        </li>
        <li
          className="nav-link"
          onClick={() => props.setMainState("Experience")}
        >
          Experience
        </li>
        <li className="nav-link" onClick={() => props.setMainState("Projects")}>
          Projects
        </li>
        <li className="nav-link" onClick={() => props.setMainState("Contact")}>
          Contact
        </li>
        <li className="nav-link" onClick={() => props.setDarkMode()}>
          <FontAwesomeIcon icon={props.darkMode ? faMoon : faSun} />
        </li>
      </ul>
      <div>
        <a
          href="https://github.com/AndrewSadikov"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="nav-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrewsadikov/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="nav-icon" icon={faLinkedin} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
