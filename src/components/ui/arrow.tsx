type ArrowProps = {
    color?: string;
    orientation?: "right" | "left" | "up" | "down";
    className?: string;
  };
  
  const orientationMap = {
    right: "rotate-0",
    left: "rotate-180",
    up: "-rotate-90",
    down: "rotate-90",
  };
  
  function Arrow({ color = "currentColor", orientation = "right", className }: ArrowProps) {
    return (
      <svg
        className={`w-full h-full transition-transform ${orientationMap[orientation]} ${className ?? ""}`}
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z"
          fill={color}
        />
      </svg>
    )
  }
  
  export default Arrow;