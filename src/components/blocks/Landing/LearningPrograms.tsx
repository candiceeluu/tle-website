import { Link } from "react-router-dom";
import Arrow from "@/components/ui/arrow";

function LearningPrograms() {
  return (
    <section className="bg-dark-blue py-16">
      <div className="container mx-auto flex flex-col items-center space-between gap-4 wait drop lg:flex-row">
        <img
          className="rounded-lg max-w-sm lg:max-w-md"
          src="/images/hero-2-img.jpg"
        />
        <div className="flex flex-col gap-2 space-between lg:max-w-1/2">
          <div>
            <p className="text-light-green">LEARNING PROGRAMS</p>
            <h2 className="text-secondary mt-1">After-School and Summer Programs</h2>
          </div>
          <p className="text-muted">
            Our after-school and summer programs are designed to support
            students at every stage of their academic journey. With focused
            instruction, guided homework time, and enrichment opportunities,
            students continue to grow in confidence and skills year-round.
          </p>
          <Link to="/programs">
            <div className="flex items-center gap-1 group">
              <p className="text-light-yellow font-medium">
                Explore Our Programs
              </p>
              <div className="w-2.5 transition-transform duration-300 group-hover:translate-x-1">
                <Arrow color="var(--light-yellow)" orientation="right" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LearningPrograms;
