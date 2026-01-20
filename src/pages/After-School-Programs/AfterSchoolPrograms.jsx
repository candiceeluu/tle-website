import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import './AfterSchoolPrograms.css'
import { Link, useNavigate } from 'react-router-dom'
import HeroCard from '../../components/HeroCard';
import FooterCard from '../../components/FooterCard';
import GradeLevelCard from '../../components/GradeLevelCard';

function AfterSchoolPrograms() {
    const navigate = useNavigate();
    return (
        <>
        <Header />
        <HeroCard 
            title="After-School Programs"
            description="Our after-school programs provide students with homework support and enrichment across elementary, middle, and high school levels. Through guided instruction and additional practice, we help students stay on track and move ahead with confidence."
            buttonText="Sign Up"
            buttonLink= "https://docs.google.com/forms/d/e/1FAIpQLSfYc1nq7XW2KFaalebziXuPfm44Dqys0tnQ-W1BeEMDQewPkg/viewform?pli=1"
            backgroundClass='bg-afterschool'
        />

        <div aria-label="afterschool-programs-btn" className="mt-4">
            <div aria-label="afterschool-programs-btn-content" className="max-width mx-auto flex wrap gap-4 justify-center align-center lg-nav-gap-10">
                <Link to="/elementary-program">
                    <div aria-label="elementary-program-btn" className="flex-column align-center">
                        <img className="afterschool-programs-btn-h" src="/images/AfterSchoolPrograms/elementary-program-btn.png" />
                        <div className="flex-column align-center mt-1">
                            <h5 className='semibold-text'>Elementary Program</h5>
                            <p>1st-5th Grade</p>
                        </div>
                    </div>
                </Link>
                
                <Link to="/middle-school-program">
                    <div aria-label="middle-school-btn" className="flex-column align-center">
                        <img className="afterschool-programs-btn-h" src="/images/AfterSchoolPrograms/middle-school-program-btn.png" />
                        <div className="flex-column align-center mt-1">
                            <h5 className='semibold-text'>Middle School Program</h5>
                            <p>6th-8th Grade</p>
                        </div>
                    </div>
                </Link>

                <Link to="/high-school-program">
                    <div aria-label="high-school-program-btn" className="flex-column align-center">
                        <img className="afterschool-programs-btn-h" src="/images/AfterSchoolPrograms/high-school-program-btn.png" />
                        <div className="flex-column align-center mt-1">
                            <h5 className='semibold-text'>High School Program</h5>
                            <p>9th-12th Grade</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        <div aria-label="afterschool-programs-services" className="mt-4 lg-nav-mt-8">
            <div aria-label="afterschool-programs-services-content" className="max-width mx-auto bg-light-blue border-box lg-nav-border-radius-2 p-3">
                <div aria-label="afterschol-programs-services-text" className="flex-column align-center center-text lg-nav-px-15">
                    <h2>Make the school year a breeze.</h2>
                    <p className="mt-1">At TLE, we strive for your child's academic achievement. With consistent afterschool structure, our students are able to develop healthy habits and excel academically, all before 6pm.</p>
                </div>
                <div aria-label="afterschool-programs-services-boxes" className="mt-2 flex-column lg-nav-flex-row gap-1">
                    <div aria-label="afterschool-pickup-box" className="bg-white border-radius-1 p-2 flex-column align-center center-text">
                        <img className="icon" src="/icons/bus.svg" />
                        <h4 className="mt-1">After-School Pickup</h4>
                        <p className='mt-05'>We offer after-school pickup from several schools across neighboring districts.</p>
                    </div>
                    <div aria-label="homework-help-box" className="bg-white border-radius-1 p-2 flex-column align-center center-text">
                        <img className="icon" src="/icons/question.svg" />
                        <h4 className="mt-1">Homework Help</h4>
                        <p className='mt-05'>Our educators assist students with their homework and ensure completion.</p>
                    </div>
                    <div aria-label="supplemental-enrichment-box" className="bg-white border-radius-1 p-2 flex-column align-center center-text">
                        <img className="icon" src="/icons/book.svg" />
                        <h4 className="mt-1">Supplemental Enrichment</h4>
                        <p className='mt-05'>We provide additional enrichment packets to further academic development.</p>
                    </div>
                </div>
            </div>
        </div>

        <div aria-label="afterschool-programs-schedule" className="mt-4 lg-nav-mt-8">
            <div aria-label="afterschool-programs-schedule-content" className="max-width mx-auto border-box flex-column align-center px-3">
                <div aria-label="afterschool-programs-text" className="center-text lg-nav-px-15">
                    <h2>Consistency is key.</h2>
                    <p className="mt-1">Our structured afterschool schedule ensures that homework is completed on time while setting them up for success with supplemental enrichment, curated specially for their grade level.</p>
                </div>
                <picture className="mt-2 lg-nav-mt-4">
                    <source
                    media="(min-width: 1140px)"
                    srcSet="/images/AfterSchoolPrograms/afterschool-schedule-lg-nav.svg"
                    />
                    <img
                    className='w-full'
                    src="/images/AfterSchoolPrograms/afterschool-schedule.svg"
                    alt=""
                    />
                </picture>
            </div>
        </div>

        <div aria-label="afterschool-private-tutoring" className="mt-4 lg-nav-mt-8 bg-green">
            <div aria-label="afterschool-private-tutoring-content" className="max-width mx-auto flex-column align-center lg-nav-flex-row border-box p-3">
                <div aria-label="afterschool-private-tutoring-text" className="lg-nav-mr-3">
                    <h2>Additional Private Tutoring</h2>
                    <p className="mt-1">We also offer private tutoring for our students based on their specific needs. For inquiries, please give us a call or send us an email.</p>
                    <ul className="bullet-points">
                        <li>Private</li>
                        <li>Semi-Private</li>
                        <li>Small Classes</li>
                    </ul>
                </div>
                <img className="w-full lg-nav-w-40p mt-1" src="/images/AfterSchoolPrograms/private-tutor-subjects.svg" />
            </div>
        </div>

        <div aria-label="afterschool-programs-grades" className="mt-4 lg-nav-mt-8">
            <div aria-label="afterschool-programs-grades-content" className="max-width mx-auto p-3 flex-column gap-2">
                <GradeLevelCard 
                    backgroundColor='bg-yellow'
                    title="Elementary Program"
                    description="Build strong academic foundations through guided homework help, skill reinforcement, and supportive instruction in a nurturing environment."
                    image="/images/AfterSchoolPrograms/elementary-program.jpg"
                    tagText="1st-5th Grade"
                    tagStyle="bg-dark-yellow"
                    buttonStyle="bg-dark-cream border-yellow-gradient"
                    buttonLink="/elementary-program"
                />
                <GradeLevelCard 
                    backgroundColor='bg-green'
                    title="Middle School Program"
                    description="Structured homework assistance and supplemental enrichment strengthens our students' study skills, organization, and subject mastery."
                    image="/images/AfterSchoolPrograms/middle-school-program.jpg"
                    tagText="6th-8th Grade"
                    tagStyle="bg-dark-green"
                    buttonStyle="bg-dark-cream border-green-gradient"
                    buttonLink="/middle-school-program"
                />
                <GradeLevelCard 
                    backgroundColor='bg-light-blue'
                    title="High School Program"
                    description="Focused academic support and supplemental instruction help students manage coursework, prepare for advanced classes, and stay on track for success."
                    image="/images/AfterSchoolPrograms/high-school-program.jpg"
                    tagText="9th-12th Grade"
                    tagStyle="bg-dark-blue"
                    buttonStyle="bg-dark-cream border-blue-gradient"
                    buttonLink="/high-school-program"
                />
            </div>
        </div>
        <FooterCard 
            title="Questions?"
            description="Give us a call at (909)-444-1871 or email us at totallearningeducation@gmail.com for more information."
        />
        <Footer />
        </>
    )
}

export default AfterSchoolPrograms