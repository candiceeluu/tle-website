function EnrollmentOpen({ isOpen }) {
  const LocalVideoPlayer =  (
      <video controls>
        <source src="./videos/summer_promo.mp4" type="video/mp4" />
        Your browser does not support this video.
      </video>
    )

    return (
      <section className="container mx-auto flex flex-col items-center gap-2 mt-4 lg:flex-row">
        <div className="flex flex-col justify-center text-center gap-1 lg:text-left">
          <h2>
            {isOpen ? "Enrollment is now open!" : "Summer 2026"}
          </h2>
          <p>
            {isOpen
              ? "Register for the 2026 Summer Program and spend your summer having fun and preparing for the upcoming academic year!"
              : "Enrollment has ended. Please check back for Summer 2026 enrollment."}
          </p>
        </div>
        <div className="sm:w-[600px]">
            {LocalVideoPlayer}
        </div>
      </section>
    );
  }

export default EnrollmentOpen;