const leftBlob = (
  <svg
    width="699"
    height="584"
    viewBox="0 0 699 584"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100.813 98.5098C244.999 -67.8489 846.251 6.92264 663.659 129.906C616.354 161.768 582.961 167.467 531.253 191.535C396.672 254.176 277.726 345.993 183.045 460.323C149.999 500.227 139.656 531.127 98.426 562.504C-45.771 672.239 -17.8659 235.44 100.813 98.5098Z"
      fill="url(#paint0_linear_993_1364)"
      fill-opacity="0.5"
    />
    <defs>
      <linearGradient
        id="paint0_linear_993_1364"
        x1="545.89"
        y1="175.014"
        x2="178.052"
        y2="434.125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9FC0E5" />
        <stop offset="1" stop-color="#90BD7D" />
      </linearGradient>
    </defs>
  </svg>
);

const rightBlob = (
  <svg
    width="668"
    height="780"
    viewBox="0 0 668 780"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M491.279 667.089C679.381 552.711 706.071 -52.5842 554.321 106.904C515.007 148.224 503.81 180.197 471.445 227.159C387.209 349.389 276.817 451.331 148.28 525.588C103.418 551.506 71.2239 556.543 33.4028 591.954C-98.8728 715.8 336.452 761.234 491.279 667.089Z"
      fill="url(#paint0_linear_997_1376)"
      fill-opacity="0.5"
    />
    <defs>
      <linearGradient
        id="paint0_linear_997_1376"
        x1="490.179"
        y1="215.486"
        x2="173.276"
        y2="534.886"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9FC0E5" />
        <stop offset="1" stop-color="#90BD7D" />
      </linearGradient>
    </defs>
  </svg>
);

function Hero() {
  return (
    <section className="container mx-auto relative flex justify-center items-center overflow-clip h-[400px]">
      <div className="absolute -left-50 -top-25 h-full w-100 wait slideR d05">
        {leftBlob}
      </div>
      <div className="text-center flex flex-col gap-2 max-w-[800px] mx-auto z-10 wait">
        <h1>All Programs</h1>
        <p>
          We offer several different programs year-round to provide our students
          with diverse and consistent support throughout their academic
          development.
        </p>
      </div>
      <div className="absolute -right-50 wait slideL d05">{rightBlob}</div>
    </section>
  );
}

export default Hero;
