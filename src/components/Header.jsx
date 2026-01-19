import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
        <div style={{borderBottom:"1px solid black", backgroundColor:"#FFFDFA"}} className="sticky-header w-full" >
            <header className= "bg-white header-h">
                <nav className="px py h-full">
                    <div className="mobile-only align-center space-between h-full w-full border-box">
                        <img 
                            src="images/hamburger.svg" 
                            alt="Menu"
                            className='pointer'
                            onClick={() => setMenuOpen(true)}

                        />
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
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <button className="close-btn black-text" onClick={() => setMenuOpen(false)}>✕</button>
            <ul>
                <li onClick={() => setMenuOpen(false)}><Link to="/about">About Us</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link to="/math-prep">Math Prep</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link to="/programs">Programs</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link to="/careers">Careers</Link></li>
                <li onClick={() => setMenuOpen(false)}>Contact</li>
            </ul>
        </div>
        </>       
    )
}

export default Header;