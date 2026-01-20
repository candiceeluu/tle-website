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
                    <p className="mt-1">We offer several different programs year-round to provide our students with diverse and consistent support throughout their academic development.</p>
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
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Our after-school programs provide students with homework support and enrichment across elementary, middle, and high school levels. Through guided instruction and additional practice, we help students stay on track and move ahead with confidence.</p>
                            <h1 className="mt-1">After-School Programs</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/summer-program">
                    <div aria-label="summer-program-link" className="bg-summer-program bg-img bg-shading border-radius-2 p-2 mt-3">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Designed to prepare students for the next academic year, our summer program combines instructional preview, weekly assessments, and enrichment activities. Weekly field trips add a fun, hands-on element to learning throughout the summer.</p>
                            <h1 className="mt-1">Summer Programs</h1>
                        </div>
                    </div>
                </Link>
                
                <Link to="/math-prep">
                    <div aria-label="math-prep-link" className="bg-math-prep bg-img bg-shading border-radius-2 p-2 mt-3">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>Our math prep classes provide structured, small-group learning that helps students deepen understanding and succeed in advanced math pathways. With targeted practice and guidance, students are well prepared for placement exams.</p>
                            <h1 className="mt-1">Math Prep</h1>
                        </div>
                    </div>
                </Link>

                <Link to="/private-tutoring">
                    <div aria-label="private-tutoring-link" className="bg-private-tutoring bg-img bg-shading border-radius-2 p-2 mt-3">
                        <div className="right-text">
                            <h2>&gt; LEARN MORE</h2>
                        </div>
                        <div className="mt-4">
                            <p>We provide personalized, one-on-one tutoring in multiple subjects to support academic growth and mastery. Each session is customized to help students progress at their own pace.</p>
                            <h1 className="mt-1">Private Tutoring</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <FooterCard
            title="Questions?"
            description="Give us a call at (909)-444-1871 or email us at totallearningeducation@gmail.com for more information."
            hasButton={false}
        />
        <Footer />
        </>
    )
}

export default Programs