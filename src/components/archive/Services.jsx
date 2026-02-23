function Services() {
    return (
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
</AnimatedContent>
    )
}

export default Services;