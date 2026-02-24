import Arrow from "@/components/ui/arrow";
import { Link } from "react-router-dom";

type ProgramBoxProps = {
  type: keyof typeof programMap;
  description: string;
  color: keyof typeof colorMap;
  orientation: "ltr" | "rtl";
};

const programMap = {
  afterschool: {
    title: "After-School Programs",
    image: "/images/Programs/bg-afterschool.jpg",
    link: "/after-school-programs",
  },
  summer: {
    title: "Summer Programs",
    image: "/images/Programs/bg-summer-program.jpg",
    link: "/summer-program",
  },
  mathprep: {
    title: "Math Prep",
    image: "/images/Programs/bg-math-prep.jpg",
    link: "/math-prep",
  },
  privatetutoring: {
    title: "Private Tutoring",
    image: "/images/Programs/bg-private-tutoring.jpg",
    link: "/private-tutoring",
  },
};

const colorMap = {
  blue: { primary: "#1E4168", background: "#9FC0E5" },
  yellow: { primary: "#89542F", background: "#EBD39C" },
  green: { primary: "#1F3D1E", background: "#8EC58D" },
  purple: { primary: "#40368D", background: "#B7B0EE" },
};

// function ProgramBox({
//   type,
//   description,
//   color,
//   orientation,
// }: ProgramBoxProps) {
//   const textCol = (
//     <div
//       style={{ color: colorMap[color].primary }}
//       className="flex flex-col gap-0.5 justify-end p-10"
//     >
//       <h2>{programMap[type].title}</h2>
//       <p className="text-muted-dark">{description}</p>
//       <Link to={programMap[type].link}>
//         <div className="flex gap-1 pt-2">
//           <p className="font-semibold">Explore</p>
//           <div className="w-2.5">
//             <Arrow />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );

//   const imageCol = (
//     <div className="max-h-[300px]">
//       <img
//         className="h-full w-full object-cover"
//         src={programMap[type].image}
//       />
//     </div>
//   );

//   return (
//     <section
//       className="grid grid-cols-2 rounded-2xl overflow-hidden w-full sm:grid-cols-none sm:grid-rows-2"
//       style={{ background: colorMap[color].background }}
//     >
//       {orientation === "ltr" ? (
//         <>
//           {textCol}
//           {imageCol}
//         </>
//       ) : (
//         <>
//           {imageCol}
//           {textCol}
//         </>
//       )}
//     </section>
//   );
// }

// export default ProgramBox;

function ProgramBox({
    type,
    description,
    color,
    orientation,
  }: ProgramBoxProps) {
    const textCol = (
      <div
        style={{ color: colorMap[color].primary }}
        className="flex flex-col gap-0.5 justify-end p-10"
      >
        <h2>{programMap[type].title}</h2>
        <p className="text-muted-dark">{description}</p>
        <Link to={programMap[type].link}>
          <div className="flex gap-1 pt-2">
            <p className="font-semibold">Explore</p>
            <div className="w-2.5">
              <Arrow />
            </div>
          </div>
        </Link>
      </div>
    );
  
    const imageCol = (
      <div className="">
        <img
          className="object-cover w-full max-h-[300px]"
          src={programMap[type].image}
        />
      </div>
    );
  
    return (
      <section
        className="flex flex-col rounded-2xl overflow-hidden w-full"
        style={{ background: colorMap[color].background }}
      >
        {imageCol}
        {textCol}
      </section>
    );
  }
  
  export default ProgramBox;