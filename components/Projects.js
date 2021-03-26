import ProjectCard from './ProjectCard'
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan quam non ante suscipit hendrerit accumsan eu purus. Integer tempus efficitur luctus. Praesent arcu arcu, blandit at cursus sit amet, vestibulum at elit. Quisque a nisi et tortor molestie hendrerit nec vitae nulla. Phasellus convallis ligula non maximus dictum. Donec at nulla a nunc congue vestibulum eu non ante."
const git = ""
const demo = ""

export default function Projects({ aos }) { 
return(
    <div id="Projects" className="page-container">
        <div data-aos="fade-up" className="project-container">
                <ProjectCard position={1} title="Title Soon" git={git} demo={demo} description={description} image="/assets/stock_site.jpg"/>
                <ProjectCard position={2} title="Title Soon" git={git} demo={demo} description={description} image="/assets/stock_site.jpg"/>
                <ProjectCard position={3} title="Title Soon" git={git} demo={demo} description={description} image="/assets/stock_site.jpg"/>
                <ProjectCard position={4} title="Title Soon" git={git} demo={demo} description={description} image="/assets/stock_site.jpg"/>
                <ProjectCard position={5} title="Title Soon" git={git} demo={demo} description={description} image="/assets/stock_site.jpg"/>
            </div>
    </div>
)}