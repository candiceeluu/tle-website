import ServiceBox from "./ServiceBox";

function Services() {
  return (
    <section className="bg-dark-blue py-16">
      <div className="container mx-auto flex flex-col gap-2 wait">
        <div className="flex flex-col items-center gap-1 lg:gap-8 lg:flex-row">
          <h1 className="text-light-blue">Level up your academic journey...</h1>
          <p className="text-muted">
            Structured tutoring programs that improve grades, deepen
            understanding, and develop strong study habits.
          </p>
        </div>
        <div className="bg-primary/50 p-10 flex justify-center rounded-2xl">
          <div className="grid grid-rows-3 gap-2 wait dx lg:grid-rows-none lg:grid-cols-3">
            <ServiceBox
              icon="book"
              iconColor="#3D6CA2"
              service="Homework Help"
              description="We offer homework support in a focused environment to ensure assignments are completed accurately and on time."
            />
            <ServiceBox
              icon="chat"
              iconColor="#40733F"
              service="Multilingual Support"
              description="We offer support for our students beyond English. Our staff also speaks Chinese, Korean, and Spanish."
            />
            <ServiceBox
              icon="diamond"
              iconColor="#DEA319"
              service="Academic Encrichment"
              description="Supplemental material strengthens core math and ELA skills, prepares students for State Testing and next year coursework."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
