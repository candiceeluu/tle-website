import Arrow from "@/components/ui/arrow";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="bg-yellow-blue-gradient w-full py-5">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:text-left">
        <h3 className="text-lg font-medium tracking-tight md:text-2xl">
          2026 Fall After-School Registration is open now!
        </h3>

        <Link
          to="/after-school-programs"
          className="group flex shrink-0 items-center gap-2 rounded-full border border-[#262626]/70 px-5 py-2 text-sm font-medium tracking-wide text-[#262626] uppercase transition-colors duration-200 hover:border-[#262626] hover:bg-[#262626]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#262626]"
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