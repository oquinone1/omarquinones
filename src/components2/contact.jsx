import {useState} from 'react';

const Contact = () => {
    const email = "omarquinones977@gmail.com";
    const linkedin = 'https://www.linkedin.com/in/oquinones8';
    const github = 'https://github.com/oquinone1';

    const [copy, setCopy] = useState(false);

    const handleCopy = async() => {
        try {
            await navigator.clipboard.writeText(email);
            setCopy(true);
            setTimeout(() => setCopy(false), 2000);
          } catch (err) {
            console.error("Copy failed", err);
          }
    };

    return (
    <div className='contact' id="contact">
        <div className='info'>
            <div className='section-title'> <div className='dot'/> CONTACT <div className='dash'/></div>
            <p>Lets Connect</p>
        </div>

        <div className='contact-btns'>
            <button className='email' onClick={handleCopy}>{copy ? "Copied": email}</button>
            <button className='webpages'><a href={linkedin}rel="noopener noreferrer" target="_blank">LinkedIn</a></button>
            <button className='webpages'><a href={github}rel="noopener noreferrer" target="_blank">GitHub</a></button>
        </div>
    </div>
    );
}
export default Contact;