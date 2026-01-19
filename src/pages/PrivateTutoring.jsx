import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import HeroCard from '../components/HeroCard';

function PrivateTutoring() {
    return (
        <>
        <Header />
        <HeroCard 
            title="Private Tutoring"
            description="We provide personalized, one-on-one tutoring in multiple subjects to support academic growth and mastery. Each session is customized to help students progress at their own pace."
            backgroundClass="bg-private-tutoring"
        />
        <div className='mt-2'>
            <div className='max-width mx-auto p-2 flex-column lg-nav-flex-row-reverse align-center gap-2'>
                <div>
                    <h3>One-on-One Tutoring</h3>
                    <p className='mt-1'>We offer private tutoring for all our students based on their needs. Our educators can support subjects in Math, English, Chinese, and more.</p>
                    <p className='mt-1'>For inquiries, please contact our office at (909)-444-1871 or send us an email.</p>
                </div>
                <img className="w-full border-radius-2 lg-nav-w-40p" src="/images/PrivateTutoring/private-tutoring-img.jpg"/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default PrivateTutoring