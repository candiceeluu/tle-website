import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import HeroCard from '../components/HeroCard';
import Tag from '../components/Tag';
import Polaroid from '../components/Polaroid';
import CustomerTestimonial from '../components/CustomerTestimonial';

function SummerProgram() {
    return (
        <>
        <Header />
        <HeroCard
            title="Summer Program"
            description="Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis."
            buttonText="Sign Up"
            onButtonClick= ""
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
                <div aria-label="summer-programs-boxes" className='flex wrap justify-center gap-4 mt-2'>
                    <div aria-label="summer-program-grade-school-box" className='flex-column bg-white border-radius-2 p-2'>
                        <div className='flex space-between align-center'>
                            <h3>Grade School</h3>
                            <Tag text="1st-8th" backgroundClass="bg-dark-green"/>
                        </div>
                        <ul className='green-star-bullets'>
                            <li className='mt-1'>Preview next year's material</li>
                            <li>Weekly assessments & parent reports</li>
                            <li>Choose different level classes</li>
                            <li>Weekly fun field trips!</li>
                        </ul>
                        <div className='flex space-between mt-2'>
                            <button className='button black-trans-btn'>See Schedule</button>
                            <button className='button'>Register</button>
                        </div>
                    </div>
                    <div aria-label="summer-program-grade-school-box" className='flex-column bg-white border-radius-2 p-2'>
                        <div className='flex space-between align-center'>
                            <h3>High School</h3>
                            <Tag text="9th-12th" backgroundClass="bg-dark-blue"/>
                        </div>
                        <ul className='blue-star-bullets'>
                            <li className='mt-1'>Preview next year's material</li>
                            <li>Weekly assessments & parent reports</li>
                            <li>Choose different level classes</li>
                            <li>Weekly fun field trips!</li>
                        </ul>
                        <div className='flex space-between mt-2'>
                            <button className='button black-trans-btn'>See Schedule</button>
                            <button className='button'>Register</button>
                        </div>
                    </div>
                </div>
                <div aria-label="summer-program-archive" className='my-4'>
                    <div>
                        <h1>Summer Archive</h1>
                        <button className='button black-trans-btn mt-1'>View More Photos</button>
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
                    <CustomerTestimonial text="Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis" caption="- Parent Testimonial"/>
                    <CustomerTestimonial text="Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis" caption="- Parent Testimonial"/>
                    <CustomerTestimonial text="Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis" caption="- Parent Testimonial"/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default SummerProgram