
const Card = (props) => {
    const {image, title, description, stack, github, demo} = props || {};
    return (
    <div className="card">
        {image && <img src={image} alt="" className="image"/>}
        {title && <div className="title">{title}</div>}
        {description && <p className="description">{description}</p>}
        {stack && <div className="stack">{stack.join(' · ')}</div>}
        {github && demo && <div className="links">
            <a href={demo} rel="noopener noreferrer" target="_blank">live &#8594;</a> &nbsp; <a href={github} rel="noopener noreferrer" target="_blank">source &#8594;</a>
        </div>}
    </div>
    )
}
export default Card;