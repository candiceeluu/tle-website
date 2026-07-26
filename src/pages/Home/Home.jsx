import './Home.css'
import "/src/styles/animations.css";
import Header from '/src/components/layout/Header';
import Footer from '/src/components/layout/Footer';
import FooterCard from '/src/components/ui/FooterCard';
import Hero from '/src/components/blocks/Landing/Hero';
import LearningPrograms from '/src/components/blocks/Landing/LearningPrograms';
import Services from '/src/components/blocks/Landing/Services/Services';
import Location from '/src/components/blocks/Landing/Location';
import Community from '/src/components/blocks/Landing/Reviews/Community';
import Stats from '../../components/blocks/Landing/Stats';
import WelcomeModal from '../../components/ui/WelcomeModal';

function Home() {
 return (
 <>
 <WelcomeModal />
 <Hero />
 <LearningPrograms />
 <Services />
 <Location />
 <Stats />
 <Community />

 <FooterCard 
    title="Sign up for a class or program today."
    description="We’d love to see you soon!"
    hasButton={true}
    buttonText="Sign Up"
    buttonLink="/programs"
 />
 </>
 )
}

export default Home