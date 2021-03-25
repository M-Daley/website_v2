import { Link } from 'react-scroll'

// Add Stylining and scroll to content when "Return" is pressed.  

export default function Navigation() {
return(
    <div className="col-12 nav static">
        <Link tabIndex={1} className="nav-link" activeClass="active" to="Home" spy={true} smooth={true} duration={800}>
            <span>Home</span>
        </Link>
        <Link tabIndex={2} className="nav-link" activeClass="active" to="Projects" spy={true} smooth={true} duration={800}>
            <span>Projects</span>
        </Link>
        <Link tabIndex={3} className="nav-link" activeClass="active" to="Skills" spy={true} smooth={true} duration={800}>
            <span>Skills</span>
        </Link>
        <Link tabIndex={4} className="nav-link" activeClass="active" to="Contact" spy={true} smooth={true} duration={800}>
            <span>Contact</span>
        </Link>
    </div>
)}