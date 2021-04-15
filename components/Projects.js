import ProjectCard from './ProjectCard'
import ProjectInfo from './ProjectInfo'

export default function Projects() { 
return(
    <div id="Projects" className="page-container">
        <div data-aos="fade-up" className="project-container">
                <ProjectCard {...ProjectInfo.audioPresentation}/>
                <ProjectCard {...ProjectInfo.artGallery}/>
                <ProjectCard {...ProjectInfo.responsive}/>
                <ProjectCard {...ProjectInfo.blog}/>
            </div>
    </div>
)}