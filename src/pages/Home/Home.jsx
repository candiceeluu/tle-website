import './Home.css'
import "/src/styles/globals.css";
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

function Home() {

 return (
 <>
 <Header />
 <Hero />
 <LearningPrograms />
 <Services />
 <Location />
 <Stats />
 <Community />

 {/* <div className="mt-4 lg-nav-mt-8">
 <div className="mt-4 lg-nav-mt-8 p-2">
  <div className="bg-dark-blue-gradient max-width mx-auto border-radius-2 flex-column p-2 lg-nav-flex-row lg-nav-p-3 border-box space-between">
    <div className="flex-column center-text white-text lg-nav-left-text">
      <div className="flex-column">
        <h2>Join Us <span style={{ color: '#B2D5FC'}}>Today!</span></h2>
        <h5 className="light-text mt-1">2157 S Brea Canyon Rd, Diamond Bar, CA 91765</h5>
      </div>
      <div className="mt-2 flex gap-1 flex-start w-full">
        <a href="tel:+19094441871">
          <img src="/icons/phone.svg" />
        </a>
        <h5 className="light-text">(909)-444-1871</h5>
      </div>
      <div className="mt-1 flex gap-1 flex-start w-full">
        <a href="sms:+19097609562">
          <img src="/icons/text-bubble.svg" />
        </a>
        <h5 className="light-text">(909)-760-9562</h5>
      </div>
      <div className="mt-1 flex gap-1 flex-start w-full">
        <a href="mailto:totallearningeducation@gmail.com">
          <img src="/icons/email.svg" />
        </a>
        <h5 className="light-text">totallearningeducation@gmail.com</h5>
      </div>
      <div className="mt-1 flex gap-1 flex-start w-full">
        <a href="https://www.instagram.com/totallearning.education/" target="_blank">
          <img src="/icons/instagram-white.svg" />
        </a>
        <h5 className="light-text">totallearning.education</h5>
      </div>
      <a href="https://maps.app.goo.gl/bg5jeFfq9MSNGwSH7" target="_blank">
        <button className="button bg-light-blue-gradient blue-text p mt-2">Get Directions</button>
      </a>
    </div>
    <img className="border-radius-2 mt-2 lg-nav-w-50p lg-nav-mt-0 h-full" src="/images/tle-building.png" />
  </div>
 </div> */}
 <FooterCard 
    title="Sign up for a class or program today."
    description="We’d love to see you soon!"
    hasButton={true}
    buttonText="Sign Up"
    buttonLink="/programs"
 />
 <Footer />
 </>
 )
}

export default Home