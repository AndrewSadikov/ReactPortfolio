// WIP content component.

const Contact = (props) => {
  return (
    <div id="Contact" className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h3 className={props.darkMode ? "wip-title" : "wip-title-dark"}>
          Contact
        </h3>
        <p className="wip-p">
          This is still a work in progress. Check back later for updates!
        </p>
      </section>
    </div>
  );
};

export default Contact;
