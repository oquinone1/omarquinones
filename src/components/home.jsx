import React, { useState } from "react";
import "../styling/home.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import instaCloneImage from "../images/clone_2.png";
import authorBook from "../images/author_book.png";
import easybank from "../images/easybank.png";

const Home = () => {
  const [hide, setHide] = useState(0);

  return (
    <div id="home-container">
      <div id="home-content">
        <div id="home-links-container">
          <h1 id="name-title" onClick={() => setHide(0)}>
            Omar Quinones
          </h1>
          <ul id="home-links">
            <li>
              <a
                href="https://github.com/oquinone?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon style={{ color: "#fff" }} />
              </a>
            </li>
            <li
              onClick={() =>
                (window.location = "mailto:omarquinones977@gmail.com")
              }
            >
              <EmailIcon style={{ color: "#fff", curosr: "pointer" }} />
            </li>
          </ul>
        </div>
        <div id="welcome-info">
          <div id="welcome-container" className={hide === 0 ? "" : "hide"}>
            <h1 id="welcome-text">Welcome.</h1>
            <p id="welcome-paragraph">
              My name is Omar Quinones, and I have been working as a front-end
              developer for a few years now.
              <br />
              Currently, I am eager to expand my expertise into full-stack
              development. I have experience creating full-stack projects using
              React and Spring Boot.
            </p>
          </div>

          <div className={`projects-container ${hide === 1 ? "" : "hide"}`}>
            <h1 className="project-text">Intsagram Profile Clone</h1>
            <div className="project-content">
              <div>
                <img
                  src={instaCloneImage}
                  alt="project_image"
                  className="project-img"
                  // style={{
                  //   width: "250px",
                  //   height: "250px",
                  //   objectFit: "contain",
                  //   objectPosition: "0 0",
                  // }}
                />
              </div>
              <p className="project-description">
                My goal for this project was to create a Full Stack application.
                The frontend is built with React, while the backend is developed
                using Spring Boot, and PostgreSQL serves as the database.
                <br />
                The project's functionality includes user sign-up and login
                features. Upon successful login, the user is authenticated using
                a JWT (JSON Web Token). Authentication is handled by storing the
                JWT as a cookie in the user's browser. Once authenticated, the
                user is directed to a profile page designed to resemble
                Instagram's profile interface. On this profile page, users can
                upload images to their profile, which are saved in the
                PostgreSQL database. Additionally, users can update their bio
                and change their profile picture.
                <br />
                <br />
                <p>
                  Tech Used: React, Spring Boot, Sass, React-Bootstrap, Flexbox,
                  JWT
                </p>
              </p>
            </div>
          </div>

          <div className={`projects-container ${hide === 2 ? "" : "hide"}`}>
            <h1 className="project-text">Author Management</h1>
            <div className="project-content">
              <div>
                <img
                  src={authorBook}
                  alt="project_image"
                  className="project-img"
                  // style={{
                  //   width: "250px",
                  //   height: "250px",
                  //   objectFit: "contain",
                  //   objectPosition: "0 0",
                  // }}
                />
              </div>
              <p className="project-description">
                This is a simple react and spring boot project. The goal for
                this project was just to be able to save authors and
                corresponding books that they have published to a postgress
                database.Crud Operations
                <br />
                <br />
                <p>
                  Tech Used: React, Spring Boot, Sass, React-Bootstrap, Flexbox,
                  JWT
                </p>
              </p>
            </div>
          </div>

          <div className={`projects-container ${hide === 3 ? "" : "hide"}`}>
            <h1 className="project-text">Easybank</h1>
            <div className="project-content">
              <div>
                <a
                  href="https://oquinone.github.io/landingpage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={easybank}
                    alt="project_image"
                    className="project-img"
                  />
                </a>
              </div>
              <p className="project-description">
                The goal of this project was to create a responsive landing
                page. The responsiveness is achieved using breakpoint mixins
                from Sass, ensuring the site adjusts seamlessly for phone,
                tablet, and large monitor screens
                <br />
                <br />
                <p>
                  Tech used: React, Sass, Flexbox, React-bootstrap components
                </p>
              </p>
            </div>
          </div>

          <div id="home-projects">
            <h1 id="project-text">Projects</h1>
            <ul id="project-items">
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    // textTransform: "lowercase",
                  }}
                  onClick={() => setHide(1)}
                >
                  Instagram Clone
                </Button>
              </li>
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setHide(2)}
                >
                  Author Management
                </Button>
              </li>
              <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setHide(3)}
                >
                  EasyBank
                </Button>
              </li>
              {/* <li className="project-names">
                <Button
                  variant="text"
                  size="small"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setHide(4)}
                >
                  Project 4
                </Button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
