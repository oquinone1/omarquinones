import '../styling/home2.css';

const Navbar = () => {
    return (
    <div className="nav-container">
        <div className='name'>~/omar-quinones</div>
        <div className='nav-items'>
            <ul>
                <li><a href="#about">./about</a></li>
                <li><a href="#projects">./projects</a></li>
                <li><a href="#skills">./skills</a></li>
                <li><a href="#contact" className="contact-link">./contact</a></li>
            </ul>
        </div>
    </div>)
};
export default Navbar;