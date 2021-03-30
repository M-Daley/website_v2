import ProjectCard from './ProjectCard'
const description = "A mobile & tablet responsive single site web page that displays hand drawn and animated art by a close friend of mine. Utilizes react-scroll for a smooth transition back to the top of the page, cloudinary to host the images and next/react to piece it all together."
const git = "https://github.com/M-Daley/photogallery"
const demo = "https://lit-forest-23513.herokuapp.com/"
const title = "Art Gallery"

export default function Projects({ aos }) { 
return(
    <div id="Projects" className="page-container">
        <div data-aos="fade-up" className="project-container">
                <ProjectCard position={1} title={title} git={git} demo={demo} description={description} image="/assets/gallery.png"/>
            </div>
    </div>
)}