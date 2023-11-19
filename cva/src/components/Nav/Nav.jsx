import './nav.scss'
import {Link} from "react-scroll"
const Nav = () => {
  return (
		<div className='Mainnav'>
			<div className='ulnav'>
				<ul>
					<li>
						<Link to='home'  spy={true} smooth={true} offset={-100} duration={500} > Home </Link> 
					</li>
					<li>
						<Link to='about' spy={true} smooth={true} offset={-100} duration={500} >
						About me
            </Link> 
					</li>
					<li>
						<Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >
						Contact
            </Link> 
					</li>
					<li>
						<Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >
						Projects
            </Link> 
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav