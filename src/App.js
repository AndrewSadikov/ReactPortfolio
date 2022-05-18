import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import ProjectCard from "./components/projectCard";
import ExperienceCard from "./components/experienceCard";
import experienceData from "./data/experienceData";
import projectData from "./data/projectData";

// Function called in index.js that controls the components in the root div.
function App() {
  // Used to set the dark mode / light mode of the application.
  const [darkMode, setDarkMode] = useState(true);

  // Toggles the boolean darkMode state.
  const setDarkModeFunction = () => {
    setDarkMode(!darkMode);
  };

  // Takes in the id of an element and scrolls to it.
  const scrollToId = (id) => {
    // Offsets the default scrollTo function.
    const yOffset = -80;
    // Selects the element by id and applies the scroll offset.
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    // Scrolls to the desired id + offset "y".
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Maps the data from experienceData to an array of experience cards.
  const experienceCards = experienceData.map((item) => {
    return <ExperienceCard key={item.title} {...item} darkMode={darkMode} />;
  });

  // Maps the data from projectData to an array of project cards.
  const projectCards = projectData.map((item) => {
    return <ProjectCard key={item.name} {...item} darkMode={darkMode} />;
  });

  // Returns a div with the desired components to be rendered in index.js.
  return (
    <div className={darkMode ? "body-light" : "body-dark"}>
      <Header
        setDarkMode={setDarkModeFunction}
        darkMode={darkMode}
        scrollHere={scrollToId}
      />
      <Home darkMode={darkMode} />
      <Experience darkMode={darkMode} cards={experienceCards} />
      <Projects darkMode={darkMode} cards={projectCards} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
