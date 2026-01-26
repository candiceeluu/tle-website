import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import HeroCard from '../components/HeroCard';
import Tag from '../components/Tag';
import Polaroid from '../components/Polaroid';
import CustomerTestimonial from '../components/CustomerTestimonial';
import FooterCard from '/src/components/FooterCard'
import SummerProgramBox from '../components/SummerProgramBox';

function SummerProgram() {
    return (
        <>
        <Header />
        <HeroCard
            title="Summer Program"
            description="Designed to prepare students for the next academic year, our summer program combines instructional preview, weekly assessments, and enrichment activities. Weekly field trips add a fun, hands-on element to learning throughout the summer."
            buttonText="Sign Up"
            backgroundClass='bg-summer-program'
        />

        <div className="mt-4">
            <div className="max-width mx-auto flex-column align-center center-text">
                <h1>Summer 2025</h1>
                <p className='mt-1'>Enrollment has ended. Please check back for Summer 2026 enrollment.</p>
            </div>
        </div>

        <div className='bg-sky-blue mt-4'>
            <div className='flex-column max-width mx-auto p-2'>
                <h2 className='mt-2'>Our Summer Programs</h2>
                <div aria-label="summer-programs-boxes" className='flex wrap space-between gap-4 mt-2'>
                    <SummerProgramBox 
                        title="Grade School"
                        tagText="1st-8th"
                        tagColor="bg-dark-green"
                        bulletStyle="green-star-bullets"
                        bulletOne="Preview next year's material"
                        bulletTwo="Weekly assessments & parent reports"
                        bulletThree="Choose different level classes"
                        bulletFour="Weekly fun field trips!"
                        registerLink="https://docs.google.com/forms/d/e/1FAIpQLSdhLlSPKOsj0M1Kh89cyf1pxI-RQyJJ1kUSQbiCiwBn-OUn8g/viewform"
                    />
                    <SummerProgramBox 
                        title="High School"
                        tagText="9th-12th"
                        tagColor="bg-dark-blue"
                        bulletStyle="blue-star-bullets"
                        bulletOne="Preview next year's math courses"
                        bulletTwo="DBHS / WHS homework help and test prep"
                        bulletThree="Aligned schedule with DBHS / WHS summer school schedule"
                        bulletFour="Daily lunch options"
                        registerLink="https://docs.google.com/forms/d/1TguoY8UxkuQj2r9H-HzNNjax-yRGskaYyCN0Cu6tHzc/viewform?edit_requested=true"
                    />
                    <div aria-label="summer-program-grade-school-box" className='flex-column bg-dark-blue-gradient white-text w-19p border-radius-2 p-2'>
                        <h3>Want Lunch?</h3>
                        <p className='mt-1'>We offer lunch for our summer program students. Lunch must be pre-ordered and prepaid in cash.</p>
                        <p className='mt-3'>View the lunch menu below:</p>
                        <a className='mt-1' href="/documents/2025-summer-lunch.pdf" target="_blank">
                            <button className='button bg-light-blue-gradient blue-text'>View Lunch Menu</button>
                        </a>
                        <p className='mt-2 semibold-text'>Questions?</p>
                        <p className=''>Call us at (909)-444-1871 or send us an email.</p>
                    </div>
                </div>
                <div aria-label="summer-program-archive" className='my-4'>
                    <div>
                        <h1>Summer Archive</h1>
                    </div>
                    <div className='mt-4'>
                        <div className='flex wrap justify-center gap-8'>
                            <Polaroid imageUrl={"/images/SummerProgram/science-img.jpg"} text="Hands-On Science"/>
                            <Polaroid imageUrl={"/images/SummerProgram/group-presentation-img.png"} text="Group Presentations" rotation="rotate(5deg)"/>
                        </div>
                        <div className='flex wrap justify-center gap-8 mt-8'>
                            <Polaroid imageUrl={"/images/SummerProgram/learning-time-img.png"} text="Learning Time" rotation="rotate(5deg)"/>
                            <Polaroid imageUrl={"/images/SummerProgram/lunch-time-img.png"} text="Lunch Time" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-green'>
            <div className='max-width mx-auto px-3 flex-column align-center py-4'>
                <h1 className='white-text'>Customer Testimonials</h1>
                <div className='flex-row gap-1 mt-4'>
                    <CustomerTestimonial text="I seriously appreciate the time [employee] took to teach all the kids this summer. [Student] looked forward to all the classes everyday." caption="- Parent Testimonial"/>
                    <CustomerTestimonial text="[Student] likes your program because your system ensures kids are on top of their work. I have taken [student] to many different after-school programs and your program is one of the best." caption="- Parent Testimonial"/>
                    <CustomerTestimonial text="Thank you for your constant communication with us. You're great at what you do." caption="- Parent Testimonial"/>
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

export default SummerProgram