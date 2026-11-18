
const Hero = () => {
    return (
    <section className="hero">
        <div>
            <div className="frame">
                <span className="corner tl" />
                <span className="corner tr" />
                <span className="corner bl" />
                <span className="corner br" />

                <div className="frame-inner">
                    {/* eslint-disable-next-line */}
                    <p className="software">// SOFTWARE ENGINEER</p>
                    <span className="title">Omar Quinones</span>
                </div>
            </div>
            <p className="description">I’m a software engineer with a passion for full-stack work, building reliable, fast backend systems alongside smooth, clean UIs. I enjoy being handed a hard problem and finding a clear, efficient solution.</p>
            <div className="btns">
                <button className="btn-project"><a href="#projects">view_projects()</a></button>
                <button className="btn-contact">contact()</button>
            </div>
        </div>
    </section>)
};
export default Hero;