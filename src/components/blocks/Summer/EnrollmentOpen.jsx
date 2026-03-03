function EnrollmentOpen({ isOpen }) {
    return (
      <section className="container mx-auto flex flex-col justify-center items-center text-center gap-1 p-15">
        <h2>
          {isOpen ? "Enrollment is now open!" : "Summer 2026"}
        </h2>
        <p>
          {isOpen
            ? "Register for the 2026 Summer Program and spend your summer having fun and preparing for the upcoming academic year!"
            : "Enrollment has ended. Please check back for Summer 2026 enrollment."}
        </p>
      </section>
    );
  }

export default EnrollmentOpen;