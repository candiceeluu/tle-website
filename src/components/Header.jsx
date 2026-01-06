import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header-hamburger" src="images/hamburger.svg" />
            <img src="images/tle-logo.jpeg" id="header-logo" />
            <div className="header-nav-menu p">
                <a>About Us</a>
                <a>Math Prep</a>
                <a>Programs</a>
                <a>Careers</a>
                <a>Contact Us</a>
            </div>
            <button className="button join-btn p">Join</button>
        </div>
    )
}

export default Header;