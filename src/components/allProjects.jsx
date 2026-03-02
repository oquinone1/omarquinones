import React from "react";
import imageUpload from "../images/image-uploaded.png";
import easybank from "../images/easybank.png";
import multiStepForm from "../images/multi-step-form.png";
import taskManagement from "../images/task-management-2.png";
import "../styling/allProjects.css";

const AllProjects = () => {
  const projects = [taskManagement, imageUpload, easybank, multiStepForm];
  const endpoints = [
    "task-management",
    "image-upload/#/",
    "easybank/",
    "multi-step-form/",
  ];
  const overLayText = [
    "Task Management",
    "Image Upload",
    "EasyBank",
    "MultiStepForm",
  ];
  return (
    <section className="project-container">
      {projects.map((project, idx) => {
        return (
          <div className="item">
            <a
              href={`https://oquinone1.github.io/${endpoints[idx]}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={project} alt="project_image" className="project-img" />
              <h3 className="overlay">{overLayText[idx]}</h3>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default AllProjects;
