import SkillCard from './SkillCard'
import { Link } from 'react-scroll'

const techStack = ["Next", "React", "Redux", "Express", "Mongo", "GIMP"]
const solutions = ["Blogs", "Dashboards", "Portfolios", "Ecommerce", "Visual Novel Engine", "Offline Browser Apps"]
const listTalents = ["Single Page", "Multi-Page", "Custom API", "Sub Domains", "Serverless"]

export default function About() { 
    return(
        <div id="Skills" className="page-container">
            <div className="card-container col-10">
                <SkillCard title="Stack" list={techStack}/>
                <SkillCard title="Solutions" list={solutions}/>
                <SkillCard title="Services" list={listTalents} />
            </div>
            <Link tabIndex={5} className="call-to-action" activeClass="active" to="Contact" spy={true} smooth={800}>
                <span>Learn More</span>
            </Link>
        </div>
    )}