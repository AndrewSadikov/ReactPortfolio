const Contact = (props) => {
  return (
    <div className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h3 className="wip-title">Contact</h3>
        <p className="wip-p">
          This is still a work in progress. Check back later for updates!
        </p>
      </section>
    </div>
  );
};

export default Contact;
