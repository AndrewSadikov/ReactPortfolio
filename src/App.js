import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import ProjectCard from "./components/projectCard";
import ExperienceCard from "./components/experienceCard";
import experienceData from "./data/experienceData";
import projectData from "./data/projectData";

function App() {
  const [mainState, setMainState] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  const setDarkModeFunction = () => {
    setDarkMode(!darkMode);
  };

  const experienceCards = experienceData.map((item) => {
    return <ExperienceCard {...item} darkMode={darkMode} />;
  });

  const projectCards = projectData.map((item) => {
    return <ProjectCard {...item} />;
  });

  if (mainState === "Experience") {
    return (
      <div className={darkMode ? "light" : "dark"}>
        <Header
          setMainState={setMainState}
          setDarkMode={setDarkModeFunction}
          darkMode={darkMode}
        />
        <Experience darkMode={darkMode} cards={experienceCards} />
      </div>
    );
  }

  if (mainState === "Projects") {
    return (
      <div className={darkMode ? "light" : "dark"}>
        <Header
          setMainState={setMainState}
          setDarkMode={setDarkModeFunction}
          darkMode={darkMode}
        />
        <Projects darkMode={darkMode} cards={projectCards} />
      </div>
    );
  }

  if (mainState === "Contact") {
    return (
      <div className={darkMode ? "light" : "dark"}>
        <Header
          setMainState={setMainState}
          setDarkMode={setDarkModeFunction}
          darkMode={darkMode}
        />
        <Contact darkMode={darkMode} />
      </div>
    );
  }

  return (
    <div className={darkMode ? "light" : "dark"}>
      <Header
        setMainState={setMainState}
        setDarkMode={setDarkModeFunction}
        darkMode={darkMode}
      />
      <Home darkMode={darkMode} />
      <Experience darkMode={darkMode} cards={experienceCards} />
      <Projects darkMode={darkMode} cards={projectCards} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
