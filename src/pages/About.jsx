import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import FooterCard from '/src/components/FooterCard';
import EmployeeSection from '../components/archive/EmployeeSection';

function About() {
    return (
        <>
        <Header />
        <div className='max-width mx-auto px-3 flex-column align-center justify-center gap-4 mt-3 lg-nav-flex-row'>
            <div className=''>
                <h1>Academic success, nurtured with care.</h1>
                <p className='mt-1'>Total Learning Education has always strived to provide our students with the highest level of academic support and guidance throughout their academic journeys.</p>
            </div>
            <div className='w-fit-content'>
                <img className="w-full h-full cover border-radius-2" src="/images/About/about-us-hero-img.jpg" />
            </div>
        </div>

        <div className='bg-light-blue w-full mt-4'>
            <div className='max-width mx-auto p-3'>
                <h2>Mission Statement</h2>
                <p className='mt-1'>Our mission is to guide students through every stage of their education with care, structure, and personalized academic support.</p>
            </div>
        </div>

        <div className='mt-4 lg-nav-mt-8'>
            <div className='max-width mx-auto flex-column align-center center-text px-3 border-box'>
                <h1 >Founded in 2008.</h1>
                <p className='mt-3 px-3'>For 18 years, TLE has supported thousands of students in their academic journeys, providing a community of caring educators, peers, and friends. Families trust us to provide consistent support that helps students thrive year after year.</p>
                <div className='border-blue border-radius-2 px-3 flex space-between border-box w-full mt-3'
                    style={{padding: "1rem 3rem"}}>
                    <div className=''>
                        <h1>18</h1>
                        <p>years</p>
                    </div>
                    <div className=''>
                        <h1>1000+</h1>
                        <p>students</p>
                    </div>
                    <div className=''>
                        <h1>30+</h1>
                        <p>schools</p>
                    </div>
                    <div className=''>
                        <h1>10+</h1>
                        <p>educators</p>
                    </div>
                </div>
            </div>

            <div className='mt-4 lg-nav-mt-8'>
                <div className='flex-column max-width mx-auto lg-nav-flex-row px-3 align-center gap-4'>
                    <div className=''>
                        <h1>Eddie Lu</h1>
                        <h5 className='mt-1'>Director, TLE</h5>
                        <p className='mt-1'>Mr. Eddie has been teaching at Total Learning Education since 2008. He holds a California Single Subject Credential in Secondary Mathematics and a masters in Curriculum Design. He is currently a full-time math teacher in the Placentia-Yorba Linda Unified School District (PYLUSD).</p>
                        <p className='mt-1'>With deep knowledge of the WVUSD math curriculum, Mr. Eddie has helped hundreds of students excel in high school mathematics. His experience extends beyond secondary education—he has also successfully prepared TLE 5th graders for middle school placement tests. Known for his clear explanations and supportive teaching style, Mr. Eddie is dedicated to helping students build a strong mathematical foundation and confidence in their problem-solving skills.</p>
                    </div>
                    <div className=''>
                        <img src="/images/About/eddie-lu.png" />
                    </div>
                </div>
            </div>
        </div>
        <FooterCard 
            title="Want to join our team?"
            description="We'd love to have you!"
            buttonText="Apply Now"
        />
        <Footer />
        </>
    )
}

export default About