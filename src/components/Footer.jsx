import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer-logo-icons-contact">
                <div className="footer-logo-icons">
                    <img src="/images/tle-logo.jpeg" id="footer-logo" />
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/totallearning.education/" target="_blank">
                            <img src="/images/instagram-blue.svg" />
                        </a>
                    </div>
                </div>
                <div className="footer-text blue-text">
                        <p>2157 S Brea Canyon Rd, Diamond Bar, CA 91765</p>
                        <p>(909)-444-1871</p>
                        <p>totallearningeducation@gmail.com</p>
                </div>
            </div>
            <div className="footer-programs blue-text p">
                <div className="footer-links-1 footer-text">
                    <Link to="/math-prep">
                        <a className="semibold-text">Math Prep</a>
                    </Link>
                    <NavLink to="/math-prep?filter=prep">Prep Classes</NavLink>
                    <NavLink to="/math-prep?filter=advanced">AP Classes</NavLink>
                    <Link to="/private-tutoring">
                        <a className="footer-text-top-margin semibold-text">Private Tutoring</a>
                    </Link>
                </div>
                <div className="footer-links-2 footer-text">
                    <Link to="/after-school-program">
                        <a className="footer-text-top-margin semibold-text">After-School Programs</a>
                    </Link>
                    <Link to="/elementary-program">
                        <a>Elementary Program</a>
                    </Link>
                    <Link to="/middle-school-program">
                        <a>Middle School Program</a>
                    </Link>
                    <Link to="/high-school-program">
                        <a>High School Program</a>
                    </Link>
                    <Link to="/summer-program">
                        <a className="footer-text-top-margin semibold-text">Summer Program</a>
                    </Link>
                    <a>Grade School</a>
                    <a>High School</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer