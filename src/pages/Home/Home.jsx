import './Home.css'
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { useNavigate, Link } from 'react-router-dom'
import FooterCard from '/src/components/FooterCard';

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
    <h5 className='mt-1'>At Total Learning Education, our mission is to lorem ipsum dolor sit amet. Ut laudant Lorem psum dolor sit amet.</h5>
    <button onClick={() => navigate("/programs")} className="button white-btn mt-2 lg-nav-black-btn lg-nav-bg-white">Find a Program</button>
  </div>
 </div>

 <div className="bg-bright-blue lg-nav-mt-4">
  <div className="hero-content-2">
    <img className="hero-img-2" src="/images/hero-2-img.jpg" />
    <div className="hero-text-2 flex-column white-text">
      <p style={{ color: '#9EDE9D' }}>LEARNING PROGRAMS</p>
      <h2>After-School and Summer Programs</h2>
      <p>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis. </p>
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
      <h2>Located near 15+ schools</h2>
      <p>We are conveniently located right across the street from Diamond Bar High School and can coordinate pickups for your child.</p>
      <div className="school-row">
        <img className="school-logo" src="/images/wvusd.png" />
        <img className="school-logo" src="/images/cusd.png" />
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
            <p className="services-box-description">We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish.</p>
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
            <p className="services-box-description">We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-4 lg-nav-mt-8">
    <div className="max-width mx-auto p-2 flex-column center-text">
      <h2>Hear from our community</h2>
      <div className="mt-4 max-width bg-yellow-blue-gradient border-radius-2 flex-column gap-2 p-2 lg-nav-flex-row space-between">
        <div className="bg-white border-radius-2 left-text p-2 border-box">
          <div className="flex-column">
            <img className="quote-icon" src="/icons/quote.svg" />
            <h4 className='mt-1'>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti.</h4>
            <p className="semibold-text mt-4">Student Testimonial</p>
            <p className=''>6th Grade Afterschool</p>
          </div>
        </div>
        <div className="bg-white border-radius-2 left-text p-2 border-box">
          <div className="flex-column">
            <img className="quote-icon" src="/icons/quote.svg" />
            <h4 className='mt-1'>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti.</h4>
            <p className="semibold-text mt-4">Student Testimonial</p>
            <p className=''>6th Grade Afterschool</p>
          </div>
        </div>
        <div className="bg-white border-radius-2 left-text p-2 border-box">
          <div className="flex-column">
            <img className="quote-icon" src="/icons/quote.svg" />
            <h4 className='mt-1'>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti.</h4>
            <p className="semibold-text mt-4">Student Testimonial</p>
            <p className=''>6th Grade Afterschool</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
 <div className="mt-4 lg-nav-mt-8">
  <div className="flex align-center p-2 max-width mx-auto">
    <div className="flex-column">
      <h1 className="light-blue-text">Lorem ipsum dolor sit amet. <span className="green-text">Ut laudantium aliquid eos corporis eaque ut corrupti.</span></h1>
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
          <h1 className="light-blue-text">30</h1>
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
        <img src="/images/phone.svg" />
        <h5 className="light-text">(909)-444-1871</h5>
      </div>
      <div className="mt-05 flex gap-1 flex-start w-full">
        <img src="/images/email.svg" />
        <h5 className="light-text">totallearningeducation@gmail.com</h5>
      </div>
      <div className="mt-05 flex gap-1 flex-start w-full">
        <img src="/images/instagram-white.svg" />
        <h5 className="light-text">totallearningeducation</h5>
      </div>
      <div className="mt-05 flex gap-1 flex-start w-full">
        <img src="/images/facebook-white.svg" />
        <h5 className="light-text">totallearningeducation</h5>
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
    buttonText="Sign Up"
 />
 <Footer />
 </>
 )
}

export default Home