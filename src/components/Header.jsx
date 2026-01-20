import './Header.css'
import { NavLink } from 'react-router-dom'
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
                        <NavLink to="/">
                            <img className="header-logo" src="images/tle-logo.jpeg" />
                        </NavLink>
                        <button className="button bg-green">Join</button>
                    </div>

                    <div className="desktop-only align-center space-between h-full max-width mx-auto">
                        <NavLink to="/">
                            <img className="header-logo" src="images/tle-logo.jpeg" />
                        </NavLink>
                        <ul className="flex align-center">
                            <li className="mr-1">
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
                            </li>
                            <li className="mr-1 dropdown">
                                <span className="dropdown-trigger">
                                    <NavLink to="/math-prep" className={({ isActive }) => isActive ? 'active' : ''}>Math Prep</NavLink> <span className="caret">▾</span>
                                </span>

                                <div className="dropdown-menu bg-dark-blue">
                                    <NavLink to="/math-prep?filter=prep">Prep Classes</NavLink>
                                    <NavLink to="/math-prep?filter=advanced">AP Classes</NavLink>
                                </div>
                            </li>
                            <li className="mr-1 dropdown">
                                <span className="dropdown-trigger">
                                    <NavLink to="/programs" className={({ isActive }) => isActive ? 'active' : ''}>Programs</NavLink> <span className="caret">▾</span>
                                </span>

                                <div className="dropdown-menu bg-dark-blue">
                                    <NavLink to="/after-school-programs">After-School Programs</NavLink>
                                    <NavLink to="/summer-program">Summer Program</NavLink>
                                    <NavLink to="/math-prep">Math Prep</NavLink>
                                    <NavLink to="/private-tutoring">Private Tutoring</NavLink>
                                </div>
                            </li>
                            <li className="mr-1">
                                <NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''}>Careers</NavLink>
                            </li>
                            <li className="mr-1">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                            </li>
                        </ul>
                        <button className="button bg-green">Join</button>
                    </div>
                
                </nav>
            </header>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <button className="close-btn black-text" onClick={() => setMenuOpen(false)}>✕</button>
            <ul>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/about">About Us</NavLink></li>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/math-prep">Math Prep</NavLink></li>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/programs">Programs</NavLink></li>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/careers">Careers</NavLink></li>
                <li onClick={() => setMenuOpen(false)}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        </>       
    )
}

export default Header;