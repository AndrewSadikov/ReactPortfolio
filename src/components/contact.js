const Contact = (props) => {
  return (
    <div className="container">
      <section
        className={props.darkMode ? "section-main" : "section-main-dark"}
      >
        <h1>Contact me:</h1>
      </section>
    </div>
  );
};

export default Contact;
