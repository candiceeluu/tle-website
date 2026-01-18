import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div style={{borderBottom:"1px solid black", backgroundColor:"#FFFDFA"}} className="sticky-header w-full" >
            <header className= "bg-white header-h">
                <nav className="px py h-full">
                    <div className="mobile-only align-center space-between h-full w-full border-box">
                        <img src="images/hamburger.svg" />
                        <Link to="/">
                            <img className="header-logo" src="images/tle-logo.jpeg" />
                        </Link>
                        <button className="button bg-green">Join</button>
                    </div>

                    <div className="desktop-only align-center space-between h-full max-width mx-auto">
                        <Link to="/">
                            <img className="header-logo" src="images/tle-logo.jpeg" />
                        </Link>
                        <ul className="flex align-center">
                            <li className="mr-1"><Link to="/about">About Us</Link></li>
                            <li className="mr-1"><Link to="/math-prep">Math Prep</Link></li>
                            <li className="mr-1"><Link to="/programs">Programs</Link></li>
                            <li className="mr-1"><Link to="/careers">Careers</Link></li>
                            <li className="mr-1">Contact</li>
                        </ul>
                        <button className="button bg-green">Join</button>
                    </div>
                    
                </nav>
            </header>
        </div>
    )
}

export default Header;