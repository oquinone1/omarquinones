import easybank from "../images/easybank.png";
import multiStepForm from "../images/multi-step-form.png";
import taskManagement from "../images/task-management-2.png";
import Card from './card';
import '../styling/home2.css';

const Projects = () => {
    const images        = [taskManagement, easybank, multiStepForm];
    const titles        = ['Task Management', 'EasyBank', 'Multi-Step Form'];
    const description   = [
    `Built a full-stack, Jira-style task management app with React and TypeScript, where users can create multiple projects and add custom columns for each task status
    Added a drag-and-drop board so tasks can be moved between columns to update their status
    Wrote the backend with Django REST Framework, exposing CRUD APIs for projects, columns and tasks, and stored everything in PostgreSQL`, 

    `Built a responsive landing page and used Sass breakpoint mixins so the layout adjusts smoothly across phone, tablet, and large monitor screens`,

    `Built a responsive, mobile-first multi-step form with accessibility in mind, using semantic HTML and ARIA to reach a 100% Lighthouse accessibility score in Chrome`, ];

    const stack         = [['Django', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Zustand', 'Vite'], ['React', 'Sass', 'Material UI', 'Zustand'], ['React', 'CSS', 'Sass', 'React-Bootstrap']];
    const github        = ['https://github.com/oquinone1/task-management', 'https://github.com/oquinone1/easybank', 'https://github.com/oquinone1/multi-step-form'];
    const demo          = ['https://oquinone1.github.io/task-management', 'https://oquinone1.github.io/easybank/', 'https://oquinone1.github.io/multi-step-form/'];

    return (<div className="projects" id="projects">
        <div className='section-title'> <div className='dot'/> PROJECTS<div className='dash'/></div>
        <div className="card-container">
            {images.map((image, idx) => { return <Card 
            image={image} 
            title={titles[idx]}
            description={description[idx]}
            stack={stack[idx]}
            github={github[idx]}
            demo={demo[idx]}
            />})}
        </div>
    </div>)
}
export default Projects;