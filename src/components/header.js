import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faSun} />
        </li>
      </ul>
      <div>
        <img
          className="nav-icon"
          alt=""
          src={require("../images/github.png")}
        ></img>
      </div>
    </nav>
  );
};

export default Header;
