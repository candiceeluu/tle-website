type StatsBoxProps = {
  stat: string;
  caption: string;
  color?: string;
};

function StatsBox({ stat, caption, color = "text-secondary" }: StatsBoxProps) {
  return (
    <div>
      <h1 className={color}>{stat}</h1>
      <h4>{caption}</h4>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-dark-blue grid grid-rows-2 justify-items-center md:justify-items-stretch md:grid-rows-none md:grid-cols-2 items-stretch">      <img
        className="object-cover"
        src="/images/Landing/students-studying.jpg"
      />
      <div className="flex flex-col py-20 pl-10  2xl:pr-100 justify-between text-secondary wait dx">
        <h1>
          Grow with <span className="text-light-blue">confidence.</span> We
          support our students with{" "}
          <span className="text-light-blue">guidance</span> and
          <span className="text-light-blue"> care.</span>
        </h1>
        <div className="flex gap-2 wait dx">
          <StatsBox stat="100+" caption="students" />
          <StatsBox stat="10+" caption="educators" />
          <StatsBox stat="25" caption="schools" />
          <StatsBox stat="30" caption="years" color="text-light-blue" />
        </div>
      </div>
    </section>
  );
}

export default Stats;
