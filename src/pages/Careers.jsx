import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import CareerCard from '../components/CareerCard';

function Careers() {
    return (
        <>
        <Header />
        <div className='max-width mx-auto px-3 flex-column align-center'>
            <div className='center-text my-4 flex align-center gap-2'>
                <img className="desktop-only" src="/icons/careers-plant.svg" />
                <div>
                    <h1>Join the TLE Family</h1>
                    <p className='mt-1'>Are you an energetic tutor who is passionate about helping young students? We’d love to have you!</p>
                </div>
                <img className="desktop-only" src="/icons/careers-plant.svg" />
            </div>
            <div className=''>
                <h2 className='center-text'>Positions Available</h2>
                <div className='mt-3 flex wrap justify-center gap-4'>
                    <CareerCard 
                        position="1st-5th Grade Teacher"
                        description="Supervise, help, and check students’ homework/TLE work"
                        caption="~10 students"
                    />
                    <CareerCard 
                        position="6th-8th Grade Teacher"
                        description="Supervise, help, and check students’ homework/TLE work"
                        caption="~15 students"
                    />
                    <CareerCard 
                        position="High School Chemistry Tutor"
                        description="High School AP level required. Can teach privates or small group."
                        caption="~15 students"
                    />
                    <CareerCard 
                        position="High School Biology Tutor"
                        description="High School AP level required. Can teach privates or small group."
                        caption="~15 students"
                    />
                    <CareerCard 
                        position="High School Math Tutor"
                        description="High School AP level required. Can teach privates or small group."
                        caption="~15 students"
                    />
                    <CareerCard 
                        position="High School English Tutor"
                        description="High School AP level required. Can teach privates or small group."
                        caption="~15 students"
                    />
                    <CareerCard 
                        position="Homework Help TA"
                        description="High School AP level required. Can teach privates or small group."
                        caption="~15 students"
                    />
                    <CareerCard 
                        position="Junior TA"
                        description="High School AP level required. Can teach privates or small group."
                        caption="~15 students"
                    />
                </div>
            </div>
            <div className='my-4'>
                <p className='center-text'>For inquiries, please email tle@gmail.com or call (909)-444-1871</p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Careers