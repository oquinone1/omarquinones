import Card from "./card";

const Skills = () => {
    return (
    <div className="skills" id="skills">
        <div className='section-title'> <div className='dot'/> STACK <div className='dash'/></div>
        <div className="list">
            <Card title="Backend" stack={["Node.js", 'Express', 'Python', 'Django', 'REST APIs', 'PostgreSQL', 'Redis', 'Mongo']}/>
            <Card title="Frontend" stack={['React', 'Angular', 'TypeScript']}/>
            <Card title="Cloud and Tools" stack={['AWS', 'Docker', 'Git', 'DataGrip', 'Linux']}/>
        </div>
    </div>)
}
export default Skills;