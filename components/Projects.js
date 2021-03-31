import ProjectCard from './ProjectCard'
import ProjectInfo from './ProjectInfo'

export default function Projects({ aos }) { 
return(
    <div id="Projects" className="page-container">
        <div data-aos="fade-up" className="project-container">
                <ProjectCard {...ProjectInfo.artGallery}/>
                <ProjectCard {...ProjectInfo.responsive}/>
            </div>
    </div>
)}