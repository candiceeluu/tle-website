import ProgramBox from "./ProgramBox";

function AllPrograms() {
  return (
    <section className="container mx-auto flex flex-col gap-4 py-16 wait d05">
      <ProgramBox
        type="afterschool"
        description="Homework support and enrichment for all grade levels."
        color="blue"
        orientation="ltr"
      />
      <ProgramBox
        type="summer"
        description="Prepare for the next academic year and have fun."
        color="yellow"
        orientation="rtl"
      />
      <ProgramBox
        type="mathprep"
        description="Structured, small-group learning for success."
        color="green"
        orientation="ltr"
      />
      <ProgramBox
        type="privatetutoring"
        description="Personalized, one-on-one tutoring in various subjects."
        color="purple"
        orientation="rtl"
      />
    </section>
  );
}

export default AllPrograms;
