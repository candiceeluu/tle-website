import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
 return (
 <>
 <Header />
 <div className="hero-1">
  <picture className="hero-bg">
    <source
      media="(min-width: 1024px)"
      srcSet="/src/assets/hero-bg-1024.png"
    />
    <img
      src="/src/assets/hero-bg-default.jpg"
      alt=""
    />
  </picture>
  <div className="hero-content-1 flex-column white-text">
    <h1>Where knowledge <span className="green-gradient-text">sprouts!</span></h1>
    <h5>At Total Learning Education, our mission is to lorem ipsum dolor sit amet. Ut laudant Lorem psum dolor sit amet.</h5>
    <button className="button hero-btn-1 p">Find a Program</button>
  </div>
 </div>

 <div className="hero-2">
  <div className="hero-content-2">
    <img className="hero-img-2" src="/src/assets/hero-2-img.jpg" />
    <div className="hero-text-2 flex-column white-text">
      <p style={{ color: '#9EDE9D' }}>LEARNING PROGRAMS</p>
      <h2>After-School and Summer Programs</h2>
      <p>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti minus cum laborum voluptate et recusandae pariatur ut dolore reiciendis. </p>
      <button className="button white-btn p hero-btn-2">Find a Program</button>
    </div>
    <div className="hero-buttons-section-2 flex-column">
      <img className="hero-button-2" src="/src/assets/hero-2-btn-1.svg" />
      <img className="hero-button-2" src="/src/assets/hero-2-btn-2.svg" />
      <img className="hero-button-2" src="/src/assets/hero-2-btn-3.svg" />
    </div>
  </div>
 </div>

 <div className="main-bg-section">
  <img className="main-bg" src="/src/assets/main-bg.jpg" />

  <div className="hero-3">
    <div className="hero-content-3 flex-column center-text">
      <img className="icon" src="/src/assets/location.svg" />
      <h2>Located near 15+ schools</h2>
      <p>We are conveniently located right across the street from Diamond Bar High School and can coordinate pickups for your child.</p>
      <div className="school-row">
        <img className="school-logo" src="/src/assets/wvusd.png" />
        <img className="school-logo" src="/src/assets/cusd.png" />
        <img className="school-logo" src="/src/assets/rush.png" />
        <img className="school-logo" src="/src/assets/pusd.jpg" />
      </div>
    </div>
  </div>

  <div className="hero-4">
    <div className="hero-content-4 flex-column">
      <h2>Our Services</h2>
      <div className="services-box-section flex-column">
        <div className="services-box flex-column">
          <img className="icon services-box-icon"src="/src/assets/services-1-icon-1.svg" />
          <div className="services-box-text flex-column">
            <h3>Homework Help</h3>
            <p className="services-box-description">We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish.</p>
          </div>
        </div>
        <div className="services-box flex-column">
          <img className="icon services-box-icon"src="/src/assets/services-1-icon-1.svg" />
          <div className="services-box-text flex-column">
            <h3>Multilingual Support</h3>
            <p className="services-box-description">We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish.</p>
          </div>
        </div>
        <div className="services-box flex-column">
          <img className="icon services-box-icon"src="/src/assets/services-1-icon-1.svg" />
          <div className="services-box-text flex-column">
            <h3>Academic Enrichment</h3>
            <p className="services-box-description">We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="hero-5">
    <div className="hero-content-5 flex-column center-text">
      <h2>Hear from our community</h2>
      <div className="reviews-section">
        <div className="review-box">
          <div className="review-box-content flex-column">
            <img className="quote-icon" src="/src/assets/quote.svg" />
            <h4>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti.</h4>
            <div className="review-box-content-caption flex-column">
              <p className="semibold-text">Student Testimonial</p>
              <p>6th Grade Afterschool</p>
            </div>
          </div>
        </div>
        <div className="review-box">
          <div className="review-box-content flex-column">
            <img className="quote-icon" src="/src/assets/quote.svg" />
            <h4>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti.</h4>
            <div className="review-box-content-caption flex-column">
              <p className="semibold-text">Student Testimonial</p>
              <p>6th Grade Afterschool</p>
            </div>
          </div>
        </div>
        <div className="review-box">
          <div className="review-box-content flex-column">
            <img className="quote-icon" src="/src/assets/quote.svg" />
            <h4>Lorem ipsum dolor sit amet. Ut laudantium aliquid eos corporis eaque ut corrupti.</h4>
            <div className="review-box-content-caption flex-column">
              <p className="semibold-text">Student Testimonial</p>
              <p>6th Grade Afterschool</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
 </div>
 <div className="hero-6">
  <div className="hero-content-6 flex-column">
    <div className="hero-content-text-6 flex-column">
      <h1 className="light-blue-text">Lorem ipsum dolor sit amet. <span className="green-text">Ut laudantium aliquid eos corporis eaque ut corrupti.</span></h1>
      <div className="hero-6-stat-section">
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
    <img className="hero-img-6" src="/src/assets/hero-img-6.png" />
  </div>
 </div>
 <div className="hero-7">
  <div className="hero-content-7 white-text flex-column">
    <div className="hero-content-text-7 flex-column center-text">
      <div className="hero-content-text-title-7 flex-column">
        <h2>Join Us <span style={{ color: '#B2D5FC'}}>Today!</span></h2>
        <h5 className="light-text">2157 S Brea Canyon Rd, Diamond Bar, CA 91765</h5>
      </div>
      <div className="hero-7-info">
        <img src="/src/assets/phone.svg" />
        <h5 className="light-text">(909)-444-1871</h5>
      </div>
      <div className="hero-7-info">
        <img src="/src/assets/email.svg" />
        <h5 className="light-text">totallearningeducation@gmail.com</h5>
      </div>
      <div className="hero-7-info">
        <img src="/src/assets/instagram-white.svg" />
        <h5 className="light-text">totallearningeducation</h5>
      </div>
      <div className="hero-7-info">
        <img src="/src/assets/facebook-white.svg" />
        <h5 className="light-text">totallearningeducation</h5>
      </div>
      <button className="button hero-7-button blue-text p">Get Directions</button>
    </div>
    <img className="hero-content-img-7" src="/src/assets/tle-building.png" />
  </div>
 </div>
 <Footer />
 </>
 )
}

export default App