import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import FooterCard from '../../components/FooterCard';

function MiddleSchoolProgram() {
    return (
        <>
        <Header />
        <div aria-label="desktop-elementary-program-hero" className="desktop-only mt-1">
            <div aria-label="elementary-program-hero-content" className="max-width mx-auto flex align-center mt-2">
                <img className="w-20p" src="/images/MiddleSchoolProgram/middle-school-hero-img-1.png" />
                <div aria-label="elementary-program-hero-text" className="center-text px-3">
                    <h1>Middle School Program</h1>
                    <p className="mt-1">At TLE, we strive for your child’s academic achievement. Students are expected to complete their homework everyday.</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYc1nq7XW2KFaalebziXuPfm44Dqys0tnQ-W1BeEMDQewPkg/viewform?pli=1" target="_blank">
                        <button className='button black-trans-btn mt-2'>Sign Up</button>
                    </a>
                </div>
                <img className="w-20p" src="/images/MiddleSchoolProgram/middle-school-hero-img-2.png" />
            </div>
        </div>
        <div aria-label="mobile-elementary-program-hero" className='mobile-only'>
                <div aria-label="elementary-program-hero-content" className="max-width mx-auto">
                    <img className="w-full" src="/images/AfterSchoolPrograms/middle-school-program.jpg" />
                    <div aria-label="elementary-program-hero-text" className="px-3 mt-2">
                        <h1>Middle School Program</h1>
                        <p className="mt-1">At TLE, we strive for your child’s academic achievement. Students are expected to complete their homework everyday.</p>
                        <button className='button black-trans-btn mt-2'>Sign Up</button>
                    </div>
                </div>
            </div>
        <div className="bg-green-gradient">

            <div aria-label='elementary-program-schedule' className="mt-4 lg-nav-mt-8">
                <div aria-label='elementary-program-schedule-content' className="max-width mx-auto px-3">
                    <div className="center-text">
                        <h2>Academic Development</h2>
                        <p className="mt-1 lg-nav-px-15">Students are expected to complete their homework everyday. Our teachers will check your child’s homework before he/she signs off.</p>
                    </div>
                    <picture className="">
                        <source
                            media="(min-width: 1140px)"
                            srcSet="/images/AfterSchoolPrograms/afterschool-schedule-lg-nav.svg"
                            />
                            <img
                            className='w-full mt-3'
                            src="/images/AfterSchoolPrograms/afterschool-schedule.svg"
                            alt=""
                            />
                    </picture>
                </div>
            </div>

            <div aria-label="elementary-program-services" className="mt-4 lg-nav-mt-8">
                <div aria-label="elementary-program-services-content" className="px-3 max-width mx-auto flex-column align-center">
                    <h2 className='center-text lg-nav-px-15'>Strive for academic excellence, <span className='green-gradient-text'>nurtured with care</span></h2>
                    <div aria-label="elementary-program-services-1" className='bg-white border-radius-2 mt-3 p-3'>
                        <div aria-label="elementary-program-services-1-text" className="lg-nav-w-40p">
                            <div className='bg-light-green border-radius-2 p-08 flex align-center w-fit-content gap-1'>
                                <img src="/icons/diamond-green.svg" />
                                <p className=''>Grades</p>
                            </div>
                            <h3 className="mt-3">Grades Tracking</h3>
                            <p className="mt-1">TLE offers free, weekly Aeries Portal check-ups for 6th-8th graders. We monitor students' missing assignments and work with students to ensure academic success.</p>
                        </div>
                    </div>
                    <div aria-label="elementary-program-services-2" className='mt-1'>
                        <div aria-label="elementary-program-services-2-content" className="max-width mx-auto flex wrap gap-1">
                            <div aria-label="elementary-program-services-2-left" className='bg-white border-radius-2 p-3 lg-nav-w-40p'>
                                <div className='bg-light-green border-radius-2 p-08 flex justify-center w-fit-content gap-1'>
                                    <img src="/icons/person-green.svg" />
                                    <p className=''>Study Habits</p>
                                </div>
                                <h3 className="mt-3">Distraction-Free Zone</h3>
                                <p className="mt-1">All phones must be kept inside students' bags at all times between 3 to 6pm. If parents need to contact their children, please contact the office and we will notify them.</p>
                            </div>
                            <div aria-label="elementary-program-services-2-right" className='bg-white border-radius-2 p-3 lg-nav-w-40p'>
                                <div className='bg-light-green border-radius-2 p-08 flex align-center w-fit-content gap-1'>
                                    <img src="/icons/book-green.svg" />
                                    <p className=''>Development</p>
                                </div>
                                <h3 className="mt-3">Private Tutoring</h3>
                                <p className="mt-1">We offer optional one-on-one private tutoring for students who want to focus on a particular subject or skill. Please contact our office for additional information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div aria-label="elementary-schools-in-area" className="mt-4 lg-nav-mt-8">
                <div aria-label="elementary-schools-in-area-content" className='px-3 max-width mx-auto center-text'>
                    <h2>Schools in Our Area</h2>
                    <p className='mt-2 lg-nav-px-15'>We support many middle schools in our area, including Chaparral, South Pointe, Suzanne, Ybarra, and Alvarado.</p>
                    <img className='mt-4 w-full' src="/images/MiddleSchoolProgram/middle-schools-in-area.png" />
                </div>
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

export default MiddleSchoolProgram