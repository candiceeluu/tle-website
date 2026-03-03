import FooterCard from '/src/components/ui/FooterCard';
import Year from '../utils/Year';

function About() {
    return (
        <section className='flex flex-col gap-4'>
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 mt-3 lg:flex-row">
            <div className=''>
                <h1>Academic success, nurtured with care.</h1>
                <p className='mt-1'>Total Learning Education has always strived to provide our students with the highest level of academic support and guidance throughout their academic journeys.</p>
            </div>
            <div className='w-fit'>
                <img className="w-full h-full rounded-2xl" src="/images/About/about-us-hero-img.jpg" />
            </div>
        </div>

        <div className='bg-light-blue w-full'>
            <div className='container mx-auto py-15'>
                <h2>Mission Statement</h2>
                <p className='mt-1'>Our mission is to guide students through every stage of their education with care, structure, and personalized academic support.
                                    We believe that students should spend their after-school hours with their families and our structured curriculum ensures that students
                                    can complete their work and gain further academic enrichment all before they go home. TLE is built on community and we truly treat
                                    each of our students with equal care and kindness while pushing them to exceed academically. We believe in education — made simple for
                                    both you and your child.</p>
            </div>
        </div>

        <div className=''>
            <div className='max-width mx-auto flex-column align-center center-text px-3 border-box'>
                <h1 >Founded in 2008.</h1>
                <p className='mt-3 px-3'>For {Year()} years, TLE has supported thousands of students in their academic journeys, providing a community of caring educators, peers, and friends. Families trust us to provide consistent support that helps students thrive year after year.</p>
                <div className='border-blue rounded-4xl px-3 flex flex-col gap-2 mt-3 p-3 lg:flex-row lg:justify-center'>
                    <div className="flex gap-2 px-8 lg:px-0">
                        <div className=''>
                            <h1>{Year()}</h1>
                            <p>years</p>
                        </div>
                        <div className=''>
                            <h1>1000+</h1>
                            <p>students</p>
                        </div>
                    </div>
                    <div className='flex gap-2 px-8 lg:px-0'>
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
            </div>

            <div className='container mx-auto mt-10 lg:mt-40'>
                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    <div className='flex flex-col gap-1'>
                        <h1>Eddie Lu</h1>
                        <h5 >Director, TLE</h5>
                        <p >Mr. Eddie has been teaching at Total Learning Education since 2008. He holds a California Single Subject Credential in Secondary Mathematics and a masters in Curriculum Design. He is currently a full-time math teacher in the Placentia-Yorba Linda Unified School District (PYLUSD).</p>
                        <p >With deep knowledge of the WVUSD math curriculum, Mr. Eddie has helped hundreds of students excel in high school mathematics. His experience extends beyond secondary education—he has also successfully prepared TLE 5th graders for middle school placement tests. Known for his clear explanations and supportive teaching style, Mr. Eddie is dedicated to helping students build a strong mathematical foundation and confidence in their problem-solving skills.</p>
                    </div>
                    <div className='w-400'>
                        <img src="/images/About/eddie-lu.png" />
                    </div>
                </div>
            </div>
        </div>
        <FooterCard 
            title="Want to join our team?"
            description="We'd love to have you!"
            hasButton={true}
            buttonText="Apply Now"
            buttonLink="/careers"
        />
        </section>
    )
}

export default About