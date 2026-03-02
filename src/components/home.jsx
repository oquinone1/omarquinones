// import React, { useState } from "react";
import NavbarComponent from "./navbar";
import AllProjects from "./allProjects";
import ProjectsComponent from "./projects";
import ProjectButtonsComponent from "./projectButtons";
import { useHooks } from "../hooks/hooks";
import "../styling/home.scss";

const Home = () => {
  const { hide, setHide, width } = useHooks();

  return (
    <div id="main-container">
      <div id="main-content">
        <NavbarComponent setHide={setHide} />
        <div id="projects-and-buttons-container">
          <ProjectsComponent hide={hide} width={width} />
          {/* {width <= 575 ? null : <ProjectButtonsComponent setHide={setHide} />} */}
        </div>
        <AllProjects />
      </div>
    </div>
  );
};

export default Home;
