import './Home.css'
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { useNavigate, Link } from 'react-router-dom'
import FooterCard from '/src/components/FooterCard';
import ReviewBox from '../../components/ReviewBox';

function Home() {

const navigate = useNavigate();

 return (
 <>
 <Header />
 <div className="relative">
  <picture className="">
    <source
      media="(min-width: 1140px)"
      srcSet="/images/hero-bg-1024.png"
    />
    <img
      src="/images/hero-bg-default.jpg"
      alt=""
      className='w-full block h-auto'
    />
  </picture>
  <div className="p-3 absolute inset-0 flex-column flex-end white-text lg-nav-black-text lg-nav-flex-start lg-nav-mt-4 lg-nav-w-40p">
    <h1>Where knowledge <span className="lg-nav-green-gradient-text">sprouts!</span></h1>
    <h5 className='mt-1'>Building strong study habits, solid math and ELA foundations, and a reliable homework system—so schoolwork is done and families can enjoy time together.</h5>
    <button onClick={() => navigate("/programs")} className="button white-btn mt-2 lg-nav-black-btn lg-nav-bg-white">Find a Program</button>
  </div>
 </div>

 <div className="bg-bright-blue lg-nav-mt-4">
  <div className="hero-content-2">
    <img className="hero-img-2" src="/images/hero-2-img.jpg" />
    <div className="hero-text-2 flex-column white-text">
      <p style={{ color: '#9EDE9D' }}>LEARNING PROGRAMS</p>
      <h2>After-School and Summer Programs</h2>
      <p>Our after-school and summer programs are designed to support students at every stage of their academic journey. With focused instruction, guided homework time, and enrichment opportunities, students continue to grow in confidence and skills year-round.</p>
      <button onClick={() => navigate("/programs")} className="button white-btn p hero-btn-2">Find a Program</button>
    </div>
    <div className="hero-buttons-section-2 flex-column">
      <Link to="/after-school-programs">
        <img className="hero-button-2" src="/images/hero-2-btn-1.svg" />
      </Link>
      <Link to="/summer-program">
        <img className="hero-button-2" src="/images/hero-2-btn-2.svg" />
      </Link>
      <Link to="/private-tutoring">
        <img className="hero-button-2" src="/images/hero-2-btn-3.svg" />
      </Link>
    </div>
  </div>
 </div>

  <div className="hero-3">
    <div className="hero-content-3 flex-column center-text">
      <img className="icon" src="/images/location.svg" />
      <h2>Located near <span className='green-gradient-text'>15+ schools</span></h2>
      <p>We are conveniently located right across the street from Diamond Bar High School and can coordinate pickups for your child.</p>
      <div className="school-row">
        <img className="school-logo" src="/images/wvusd.png" />
        <img className="school-logo" src="/images/rush.png" />
        <img className="school-logo" src="/images/pusd.jpg" />
      </div>
    </div>
  </div>

  <div className="mt-4 lg-nav-mt-8 bg-dark-blue">
    <div className="flex-column align-center justify-center max-width mx-auto p-3">
      <h2 className='white-text'>Our Services</h2>
      <div className="flex-column mt-2 lg-nav-flex-row gap-2">
        <div className="services-box flex-column">
          <img className="icon services-box-icon"src="/icons/book-blue-bg.svg" />
          <div className="services-box-text flex-column">
            <h3>Homework Help</h3>
            <p className="services-box-description">We offer homework support in a focused environment to ensure assignments are completed accurately and on time.</p>
          </div>
        </div>
        <div className="services-box flex-column">
          <img className="icon services-box-icon"src="/icons/chat-bubble-blue-bg.svg" />
          <div className="services-box-text flex-column">
            <h3>Multilingual Support</h3>
            <p className="services-box-description">We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish.</p>
          </div>
        </div>
        <div className="services-box flex-column">
          <img className="icon services-box-icon"src="/icons/diamond-blue-bg.svg" />
          <div className="services-box-text flex-column">
            <h3>Academic Enrichment</h3>
            <p className="services-box-description">Supplemental material strengthens core math and ELA skills, prepares students for State Testing and next year coursework.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-4 lg-nav-mt-8">
    <div className="max-width mx-auto p-2 flex-column center-text">
      <h2>Hear from our community</h2>
      <div className="mt-4 max-width bg-yellow-blue-gradient border-radius-2 flex-column gap-2 p-2 lg-nav-flex-row space-between">
        <ReviewBox
          testimony="I seriously appreciate the time [employee] took to teach all the kids this summer. [Student] looked forward to all the classes everyday."
          author="Parent Testimonial"
          program="Summer Program"
        />
        <ReviewBox
          testimony="[Student] likes your program because your system ensures kids are on top of their work. I have taken [student] to many different after-school programs and your program is one of the best."
          author="Parent Testimonial"
          program="After-School Program"
        />
        <ReviewBox
          testimony="Thank you for your constant communication with us. You're great at what you do."
          author="Parent Testimonial"
          program="After-School Program"
        />
      </div>
    </div>
  </div>  
 <div className="mt-4 lg-nav-mt-8">
  <div className="flex align-center p-2 max-width mx-auto">
    <div className="flex-column">
      <h1 className="light-blue-text">Grow with confidence.
          <span className="green-text"> We support our students with guidance and care.</span></h1>
      <div className="flex gap-2 mt-3">
        <div className="hero-6-stat">
          <h1>100+</h1>
          <h4>students</h4>
        </div>
        <div className="hero-6-stat">
          <h1>10+</h1>
          <h4>educators</h4>
        </div>
        <div className="hero-6-stat">
          <h1>25</h1>
          <h4>schools</h4>
        </div>
        <div className="hero-6-stat">
          <h1 className="light-blue-text">18</h1>
          <h4>years</h4>
        </div>
      </div>
    </div>
    <img className="desktop-only" style={{right:0}}src="/images/hero-img-6.png" />
  </div>
 </div>
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
 </div>
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