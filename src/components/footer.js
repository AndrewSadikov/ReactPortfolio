// WIP footer component.

const Footer = (props) => {
  return (
    <div className={props.darkMode ? "footer" : "footer-dark"}>
      <div className="footer-section">
        <h4 className={props.darkMode ? "wip-title" : "wip-title-dark"}>
          (Footer section WIP)
        </h4>
      </div>
    </div>
  );
};

export default Footer;
