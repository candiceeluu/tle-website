import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import './Programs.css'
import { Link } from 'react-router-dom';
import FooterCard from '/src/components/FooterCard';

function Programs() {
    return (
        <>
        <Header />
        <div aria-label="programs-hero" className="px-3">
            <div aria-label="programs-hero-content" className="max-width mx-auto flex align-center">
                <div>
                    <h1 className="mt-4 lg-nav-mt-0">All Programs</h1>
                    <p className="mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                    <button className="button black-trans-btn mt-1">Sign Up</button>
                </div>
                <div className="desktop-only">
                    <img src="/images/Programs/programs-hero-img.png" />
                </div>
            </div>
        </div>

        <div aria-label="programs-links" className="px-3 my-4">
            <div aria-label="programs-links-content" className="max-width mx-auto white-text">
                <Link to="/after-school-programs">
                    <div aria-label="after-school-program-link" className="bg-afterschool bg-img bg-shading border-radius-2 p-2">
                        <div className="right-text">
                            <h2>LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                            <h1 className="mt-1">After-School Programs</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/summer-program">
                    <div aria-label="summer-program-link" className="bg-summer-program bg-img bg-shading border-radius-2 p-2 mt-2">
                        <div className="right-text">
                            <h2>LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                            <h1 className="mt-1">Summer Programs</h1>
                        </div>
                    </div>
                </Link>
                
                <Link to="/math-prep">
                    <div aria-label="math-prep-link" className="bg-math-prep bg-img bg-shading border-radius-2 p-2 mt-2">
                        <div className="right-text">
                            <h2>LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                            <h1 className="mt-1">Math Prep</h1>
                        </div>
                    </div>
                </Link>

                <div aria-label="private-tutoring-link" className="bg-private-tutoring bg-img bg-shading border-radius-2 p-2 mt-2">
                    <div className="right-text">
                        <h2>LEARN MORE</h2>
                    </div>
                    <div className="mt-4">
                        <p>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                        <h1 className="mt-1">Private Tutoring</h1>
                    </div>
                </div>
            </div>
        </div>
        <FooterCard
            title="Questions?"
            description="We’d love to see you soon!"
            buttonText='Sign Up'
        />
        <Footer />
        </>
    )
}

export default Programs