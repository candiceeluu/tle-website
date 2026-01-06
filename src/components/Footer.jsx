import './Footer.css'

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer-logo-icons-contact">
                <div className="footer-logo-icons">
                    <img src="/src/assets/tle-logo.jpeg" id="footer-logo" />
                    <div className="footer-icons">
                        <img src="/src/assets/instagram-blue.svg" />
                        <img src="/src/assets/facebook-blue.svg" />
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
                    <a className="semibold-text">Math Prep</a>
                    <a>Available Classes</a>
                    <a>Coming Soon</a>
                    <a className="footer-text-top-margin semibold-text">Private Tutoring</a>
                </div>
                <div className="footer-links-2 footer-text">
                    <a className="footer-text-top-margin semibold-text">After-School Programs</a>
                    <a>Elementary Program</a>
                    <a>Middle School Program</a>
                    <a>High School Program</a>
                    <a className="footer-text-top-margin semibold-text">Summer Program</a>
                    <a>Grade School</a>
                    <a>High School</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer