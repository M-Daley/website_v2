export default function ProjectCard({ position, title, description, image, git, demo }) { 
    let cardClassName = `project-card-pos-${position} flip-card project-card-container`

return(
    <div className={cardClassName}>
        <div className="flip-card-inner">
            <div className="card-front">
                <img src={image} href="img"/>
            </div>
            <div className="card-back">
                <div className="project-title">
                    <h3>{title}</h3>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-btns">
                    <h2><a href={git}>GitHub</a></h2>
                    <h2><a href={demo}>Demo</a></h2>
                </div>
            </div>
        </div>
    </div>
)}