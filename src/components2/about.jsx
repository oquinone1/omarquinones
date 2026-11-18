import '../styling/home2.css';

const About = () => {
    const interest = ['Backend', 'JavaScript', 'TypeScript', 'Django', 'APIs', 'Fintech', 'Front-end', 'React', 'Angular', 'Docker', 'AWS', 'Linux']
    return(
    <div className="about" id="about">
        <div>
            <div className='section-title'> <div className='dot'/> ABOUT <div className='dash'/></div>
            <p>I’m a software engineer with a computer science degree from UC Santa Cruz. I started in frontend, grew into full-stack work with a focus on backend, and now work on an IoT SaaS platform with over 100,000 connected devices.</p>
        </div>
        <div>
            <div className='section-title'> <div className='dot'/> INTEREST <div className='dash'/></div>
            <div className='interest-items'>
                {interest.map((item) => {return <span className='item'>{item}</span>})}
            </div>
        </div>
    </div>
    );
}
export default About;