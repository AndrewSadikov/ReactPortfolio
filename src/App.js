import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  const [mainState, setMainState] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);

  const setDarkModeFunction = () => {
    setDarkMode(!darkMode);
  };

  if (mainState === "Experience") {
    return (
      <div className={darkMode ? "ahh" : "dark"}>
        <Header
          setMainState={setMainState}
          setDarkMode={setDarkModeFunction}
          darkMode={darkMode}
        />
        <Experience darkMode={darkMode} />
      </div>
    );
  }

  if (mainState === "Projects") {
    return (
      <div className={darkMode ? "ahh" : "dark"}>
        <Header
          setMainState={setMainState}
          setDarkMode={setDarkModeFunction}
          darkMode={darkMode}
        />
        <Projects darkMode={darkMode} />
      </div>
    );
  }

  if (mainState === "Contact") {
    return (
      <div className={darkMode ? "ahh" : "dark"}>
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
    <div className={darkMode ? "ahh" : "dark"}>
      <Header
        setMainState={setMainState}
        setDarkMode={setDarkModeFunction}
        darkMode={darkMode}
      />
      <Home darkMode={darkMode} />
    </div>
  );
}

export default App;
