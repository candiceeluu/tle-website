import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "/src/styles/globals.css";
import "/src/styles/animations.css";

function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Landing/landing-hero.jpg')" }}
    >
      <div className="container mx-auto text-secondary flex flex-col justify-center items-start gap-4 min-h-[500px] lg:min-h-svh">
        <div className="w-full lg:max-w-1/2 wait drop">
          <h1 className="wait dx">
            Where knowledge <span className="text-light-green">sprouts!</span>
          </h1>
          <p className="wait dx">
            Building strong study habits, solid math and ELA foundations, and a
            reliable homework system—so schoolwork is done and families can
            enjoy time together.
          </p>
        </div>
        <Link to="/programs">
          <Button variant="arrow">Find a Program</Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
