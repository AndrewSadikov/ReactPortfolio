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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const setDarkModeFunction = () => {
    setDarkMode(!darkMode);
  };

  const scrollToId = (id) => {
    const yOffset = -80;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const experienceCards = experienceData.map((item) => {
    return <ExperienceCard key={item.title} {...item} darkMode={darkMode} />;
  });

  const projectCards = projectData.map((item) => {
    return <ProjectCard key={item.name} {...item} darkMode={darkMode} />;
  });

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
