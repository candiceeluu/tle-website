type ServiceBoxProps = {
  icon: "book" | "chat" | "diamond";
  iconColor: string;
  service: string;
  description: string;
};

const bookSVG = (
  <svg
    className="w-full h-full"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55.0001 41.6326C55.0001 42.2576 54.8751 42.8826 54.6251 43.4576C54.3833 44.0338 54.0356 44.5595 53.6001 45.0076C53.1476 45.4351 52.6226 45.7826 52.0501 46.0326C51.4629 46.2716 50.8339 46.3906 50.2001 46.3826C47.3707 46.3348 44.5449 46.6031 41.7751 47.1826C38.4929 47.5697 35.3309 48.6521 32.5001 50.3576V13.0826C35.2276 11.7826 38.1501 10.9376 41.1501 10.5826C44.2033 9.97655 47.3128 9.69997 50.4251 9.75762C51.6649 9.82644 52.8298 10.373 53.6751 11.2826C54.5001 12.1626 54.9576 13.3251 54.9501 14.5326L55.0001 41.6326ZM27.5001 13.0826V50.3576C24.7159 48.6686 21.6064 47.5867 18.3751 47.1826C15.5533 46.6119 12.6787 46.3437 9.80008 46.3826C9.16623 46.3906 8.53721 46.2716 7.95008 46.0326C7.37901 45.7813 6.85487 45.4347 6.40008 45.0076C5.95429 44.5679 5.60518 44.04 5.37508 43.4576C5.12413 42.8821 4.9964 42.2604 5.00008 41.6326V14.3826C5.00401 13.1775 5.46591 12.0188 6.29218 11.1415C7.11845 10.2642 8.24731 9.73373 9.45008 9.65762C12.6293 9.57724 15.8076 9.85398 18.9251 10.4826C21.9093 10.861 24.8083 11.74 27.5001 13.0826Z"
      fill="white"
    />
  </svg>
);

const chatSVG = (
  <svg
    className="w-full h-full"
    viewBox="0 0 57 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="25.8352"
      cy="22.6054"
      rx="25.8352"
      ry="22.6054"
      transform="matrix(0.99471 0.102725 -0.102728 0.994709 5.50146 0)"
      fill="white"
    />
    <path
      d="M1.88595 41.4593L7.75092 34.4562L11.0176 41.2254L1.88595 41.4593Z"
      fill="white"
    />
  </svg>
);

const diamondSVG = (
  <svg
    className="w-full h-full"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 0C33.897 17.6778 40.2202 24.4342 60 30C35.4293 32.0623 32.6238 41.456 30 60C27.7181 41.2626 23.4644 32.9709 0 30C21.9039 24.7245 27.8162 17.7411 30 0Z"
      fill="white"
    />
  </svg>
);

const iconMap = {
  book: bookSVG,
  chat: chatSVG,
  diamond: diamondSVG,
};

function ServiceBox({
  icon,
  iconColor,
  service,
  description,
}: ServiceBoxProps) {
  return (
    <section className="bg-secondary flex flex-col justify-between rounded-3xl px-8 pt-14 pb-10">
      <div
        style={{ backgroundColor: iconColor }}
        className="w-fit p-1 rounded-full flex justify-center items-center"
      >
        <div className="w-10">{iconMap[icon]}</div>
      </div>
      <div className="pt-14 flex flex-col gap-1">
        <h3>{service}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ServiceBox;
