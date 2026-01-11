import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import './AfterSchoolPrograms.css'

function AfterSchoolPrograms() {
    return (
        <>
        <Header />
        <div aria-label="afterschool-programs-hero" className="">
            <div aria-label="afterschool-programs-content" className="bg-afterschool bg-img bg-shading lg-nav-border-radius-2 max-width mx-auto border-box p-2 lg-nav-p-3 white-text">
                <h1 className="mt-2 lg-nav-mt-4">After-School Programs</h1>
                <p className="mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                <button className="button white-btn mt-1">Sign Up</button>
            </div>
        </div>

        <div aria-label="afterschool-programs-btn" className="mt-4">
            <div aria-label="afterschool-programs-btn-content" className="max-width mx-auto flex wrap gap-4 justify-center align-center lg-nav-gap-10">
                <div aria-label="elementary-program-btn" className="flex-column align-center">
                    <img className="afterschool-programs-btn-h" src="/images/AfterSchoolPrograms/elementary-program-btn.png" />
                    <div className="flex-column align-center">
                        <h5>Elementary Program</h5>
                        <p>K-5th Grade</p>
                    </div>
                </div>

                <div aria-label="elementary-program-btn" className="flex-column align-center">
                    <img className="afterschool-programs-btn-h" src="/images/AfterSchoolPrograms/middle-school-program-btn.png" />
                    <div className="flex-column align-center">
                        <h5>Middle School Program</h5>
                        <p>6th-8th Grade</p>
                    </div>
                </div>

                <div aria-label="elementary-program-btn" className="flex-column align-center">
                    <img className="afterschool-programs-btn-h" src="/images/AfterSchoolPrograms/high-school-program-btn.png" />
                    <div className="flex-column align-center">
                        <h5>High School Program</h5>
                        <p>9th-12th Grade</p>
                    </div>
                </div>
            </div>
        </div>

        <div aria-label="afterschool-programs-services" className="mt-4 lg-nav-mt-8">
            <div aria-label="afterschool-programs-services-content" className="max-width mx-auto bg-light-blue border-box lg-nav-border-radius-2 p-3">
                <div aria-label="afterschol-programs-services-text" className="flex-column align-center center-text lg-nav-px-15">
                    <h2>Make the school year a breeze.</h2>
                    <p className="mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
                </div>
                <div aria-label="afterschool-programs-services-boxes" className="mt-2 flex-column lg-nav-flex-row gap-1">
                    <div aria-label="afterschool-pickup-box" className="bg-white border-radius-1 p-2 flex-column align-center center-text">
                        <img className="icon" src="/icons/bus.svg" />
                        <h4 className="mt-1">After-School Pickup</h4>
                        <p>Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum.</p>
                    </div>
                    <div aria-label="homework-help-box" className="bg-white border-radius-1 p-2 flex-column align-center center-text">
                        <img className="icon" src="/icons/question.svg" />
                        <h4 className="mt-1">Homework Help</h4>
                        <p>Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum.</p>
                    </div>
                    <div aria-label="supplemental-enrichment-box" className="bg-white border-radius-1 p-2 flex-column align-center center-text">
                        <img className="icon" src="/icons/book.svg" />
                        <h4 className="mt-1">Supplemental Enrichment</h4>
                        <p>Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum.</p>
                    </div>
                </div>
            </div>
        </div>

        <div aria-label="afterschool-programs-schedule" className="mt-4 lg-nav-mt-8">
            <div aria-label="afterschool-programs-schedule-content" className="max-width mx-auto border-box flex-column align-center px-3">
                <div aria-label="afterschool-programs-text" className="center-text lg-nav-px-15">
                    <h2>Consistency is key.</h2>
                    <p className="mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
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
                    <p className="mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis.</p>
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
            <div aria-label="afterschool-programs-grades-content" className="max-width mx-auto p-3">
                <div aria-label="elementary-program" className='flex-column bg-yellow border-box border-radius-2 overflow-hidden lg-nav-flex-row-reverse'>
                    <div className="w-full h-180px lg-nav-h-auto">
                        <img className="w-full h-full cover" src="/images/AfterSchoolPrograms/elementary-program.jpg" />
                    </div>
                    <div aria-label="elementary-program-text" className="p-2 lg-nav-p-3 flex-column">
                        <p className="white-text right-text">
                            <span className='bg-dark-yellow border-radius-2 p-1'>1st-5th grade</span>
                        </p>
                        <h2 className="mt-1 lg-nav-mt-4">Elementary Program</h2>
                        <p className="lg-nav-mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum.</p>
                        <button className="button bg-dark-cream border-yellow-gradient mt-1 lg-nav-mt-4">Learn More</button>
                    </div>
                </div>
                <div aria-label="middle-school-program" className='mt-3 flex-column bg-green border-box border-radius-2 overflow-hidden lg-nav-flex-row-reverse'>
                    <div className="w-full h-180px lg-nav-h-auto">
                        <img className="w-full h-full cover" src="/images/AfterSchoolPrograms/middle-school-program.jpg" />
                    </div>
                    <div aria-label="middle-school-text" className="p-2 lg-nav-p-3 flex-column">
                        <p className="white-text right-text">
                            <span className='bg-dark-green border-radius-2 p-1'>6th-8th grade</span>
                        </p>
                        <h2 className="mt-1 lg-nav-mt-4">Middle School Program</h2>
                        <p className="lg-nav-mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum.</p>
                        <button className="button bg-dark-cream border-green-gradient mt-1 lg-nav-mt-4">Learn More</button>
                    </div>
                </div>
                <div aria-label="high-school-program" className='mt-3 flex-column bg-light-blue border-box border-radius-2 overflow-hidden lg-nav-flex-row-reverse'>
                    <div className="w-full h-180px lg-nav-h-auto">
                        <img className="w-full h-full cover" src="/images/AfterSchoolPrograms/high-school-program.jpg" />
                    </div>
                    <div aria-label="high-school-program-text" className="p-2 lg-nav-p-3 flex-column">
                        <p className="white-text right-text">
                            <span className='bg-dark-blue border-radius-2 p-1'>9th-12th grade</span>
                        </p>
                        <h2 className="mt-1 lg-nav-mt-4">High School Program</h2>
                        <p className="lg-nav-mt-1">Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum.</p>
                        <button className="button bg-dark-cream border-blue-gradient mt-1 lg-nav-mt-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default AfterSchoolPrograms