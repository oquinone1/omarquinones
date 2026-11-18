import Hero from "./hero";
import Navbar from "./navbar";
import Projects from "./projects";
import Skills from "./skills";
import Contact from './contact';
import About from "./about";

const Project = () => {
    return(
    <div className="project-container">
        <Navbar />
        <Hero/>
        <About />
        <Projects/>
        <Skills/>
        <Contact />
    </div>);
};
export default Project;