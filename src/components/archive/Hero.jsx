function Hero() {
    return (
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
    )
}

export default Hero;