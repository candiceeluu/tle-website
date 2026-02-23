import { Link } from "react-router-dom";
function Location() {
  return (
    <section className="container mx-auto py-40 wait drop">
      <div className="flex flex-col center-text gap-2">
        <div className="w-14">
          <svg
            width="w-full"
            height="h-full"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.7167 72.7033C35.7367 74.3699 37.8433 75.8933 40 77.3799C42.1613 75.913 44.2577 74.3526 46.2833 72.7033C49.66 69.9307 52.8378 66.9244 55.7933 63.7066C62.6067 56.2566 70 45.4566 70 33.3333C70 29.3936 69.224 25.4925 67.7164 21.8527C66.2087 18.213 63.999 14.9058 61.2132 12.12C58.4274 9.33429 55.1203 7.12451 51.4805 5.61687C47.8407 4.10922 43.9397 3.33325 40 3.33325C36.0603 3.33325 32.1593 4.10922 28.5195 5.61687C24.8797 7.12451 21.5726 9.33429 18.7868 12.12C16.001 14.9058 13.7913 18.213 12.2836 21.8527C10.776 25.4925 10 29.3936 10 33.3333C10 45.4566 17.3933 56.2532 24.2067 63.7066C27.1621 66.9255 30.3399 69.9296 33.7167 72.7033ZM40 44.1666C37.1268 44.1666 34.3713 43.0252 32.3397 40.9936C30.308 38.9619 29.1667 36.2064 29.1667 33.3333C29.1667 30.4601 30.308 27.7046 32.3397 25.6729C34.3713 23.6413 37.1268 22.4999 40 22.4999C42.8732 22.4999 45.6287 23.6413 47.6603 25.6729C49.692 27.7046 50.8333 30.4601 50.8333 33.3333C50.8333 36.2064 49.692 38.9619 47.6603 40.9936C45.6287 43.0252 42.8732 44.1666 40 44.1666Z"
              fill="#40733F"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h2>
            Located near{" "}
            <span className="green-gradient-text">15+ schools</span>
          </h2>
          <p>
            We are conveniently located right across the street from Diamond Bar
            High School and can coordinate pickups for your child.
          </p>
        </div>
        <div className="school-row">
          <img className="school-logo" src="/images/wvusd.png" />
          <img className="school-logo" src="/images/rush.png" />
          <img className="school-logo" src="/images/pusd.jpg" />
        </div>
      </div>
    </section>
  );
}

export default Location;
