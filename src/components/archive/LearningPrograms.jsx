function LearningPrograms() {
    return (
        <div className="bg-bright-blue lg-nav-mt-4">
        <AnimatedContent
         distance={100}
         direction="vertical"
         reverse={false}
         duration={0.8}
         ease="power3.out"
         initialOpacity={0}
         animateOpacity
         scale={1}
         threshold={0.1}
         delay={0}
         >
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
       </AnimatedContent>
        </div>       
    )
}

export default LearningPrograms;