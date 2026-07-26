// banner.jsx
import Arrow from "@/components/ui/arrow";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="w-full bg-[#DEA319] py-5">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
        <p className="text-base md:text-xl font-medium tracking-tight">
          2026 Fall After-School Registration is{" "}
          <span className="text-dark-green font-semibold">open now!</span>
        </p>

        <Link
          to="/after-school-programs"
          className="group flex shrink-0 items-center gap-1.5 text-sm font-semibold tracking-wide uppercase !underline decoration-secondary/40 decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
        >
          Register
          <div className="w-2.5 transition-transform duration-200 group-hover:translate-x-1">
            <Arrow />
          </div>
        </Link>
      </div>
    </section>
  );
}