import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Arrow from "@/components/ui/arrow";

function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('hasSeenWelcomeModal', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4"
      onClick={handleClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#1c3f66] shadow-2xl sm:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        >
        <button
            className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-xl leading-none text-white close-btn hover:bg-white/10"
            onClick={handleClose}
            aria-label="Close"
        >
            ✕
        </button>

        <div className="sm:w-1/2 sm:shrink-0">
        <img
            src="images/Landing/afterschool-poster-2026.jpg"
            alt="After-school program"
            className="w-full h-auto max-h-[35vh] object-contain sm:h-full sm:max-h-none sm:min-h-[520px] sm:object-cover"
        />
        </div>

        <div className="flex flex-col justify-center gap-2 px-6 py-5 sm:gap-4 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
                    After-School Registration is{' '}
                    <span className="text-blue-300">now open!</span>
                </h2>
                <p className="text-white/90">
                    Find a program for your child and register today.
                </p>
            </div>
            <Link to="/programs" className="group flex items-center gap-1 w-fit">
                <p className="text-light-yellow font-medium">
                Explore Our Programs
                </p>
                <div className="w-2.5 transition-transform duration-300 group-hover:translate-x-1">
                <Arrow color="var(--light-yellow)" orientation="right" />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;