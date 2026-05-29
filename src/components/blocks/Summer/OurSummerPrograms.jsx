import SummerProgramBox from "./SummerProgramBox"
import Polaroid from "./Polaroid"
import Arrow from "@/components/ui/arrow";
import SummerSwimBox from "./SummerSwimBox";

export default function OurSummerPrograms() {
    return (
        <section id="our-summer-programs" className="relative flex flex-col">
            <img 
                src="/images/SummerProgram/blue_curve.svg" 
                className="absolute z-0 w-full"
            />
            <div className="pt-20 lg:pt-40"></div>
            <div className="z-20 bg-sky-blue pb-30 relative">
                <img
                    src="/images/SummerProgram/sun.svg"
                    className="absolute top-100 -right-30 z-0"
                />
                <div className="container mx-auto">
                    <div className="relative grid lg:grid-cols-2 gap-4 z-10">
                        <img
                            src="/images/SummerProgram/cloud.svg"
                            className="absolute -left-80 z-0"
                        />
                        <SummerProgramBox 
                            title="Grade School"
                            tagText="1st-8th"
                            tagColor="bg-dark-green"
                            bulletStyle="green-star-bullets"
                            bulletOne="Preview next year's material"
                            bulletTwo="Weekly assessments & parent reports"
                            bulletThree="Choose different level classes"
                            bulletFour="Weekly fun field trips!"
                            registerLink="https://docs.google.com/forms/d/e/1FAIpQLSdhLlSPKOsj0M1Kh89cyf1pxI-RQyJJ1kUSQbiCiwBn-OUn8g/viewform"
                            grade="GS"
                        />
                        <SummerProgramBox 
                            title="High School"
                            tagText="9th-12th"
                            tagColor="bg-dark-blue"
                            bulletStyle="blue-star-bullets"
                            bulletOne="Preview next year's math courses"
                            bulletTwo="DBHS / WHS homework help and test prep"
                            bulletThree="Aligned schedule with DBHS / WHS summer school schedule"
                            bulletFour="Daily lunch options"
                            registerLink="https://forms.gle/aigGoZ6rG3PS7nEfA"
                            grade="HS"
                        />
                    </div>
                    <div className="flex flex-col gap-1 pt-30 z-10 relative">
                        <h2>Want Lunch?</h2>
                        <p>We offer lunch for our summer program students. Lunch must be pre-ordered and prepaid in cash.</p>
                        <div className="flex gap-1 z-10 relative">
                            <a href="/documents/2026_summer_lunch.pdf" target="_blank" className="font-semibold">
                                View Lunch Menu
                            </a>
                            <div className="w-2.5 transition-transform duration-300 group-hover:translate-x-1">
                                <Arrow color="black" orientation="right" />
                            </div>
                        </div>
                    </div>
                    <SummerSwimBox />
                    <div className="flex flex-col pt-30">
                        <h2>Summer Archive</h2>
                        <div className="flex flex-col gap-20 items-center pt-20">
                            <div className="flex flex-col lg:flex-row gap-30">
                                <Polaroid 
                                    imageUrl="/images/SummerProgram/science-img.jpg"
                                    text="Hands-on Science"
                                />
                                <Polaroid 
                                    imageUrl="/images/SummerProgram/group-presentation-img.png"
                                    rotation="rotate(5deg)"
                                    text="Group Presentations"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-30">
                                <Polaroid 
                                    imageUrl="/images/SummerProgram/learning-time-img.png"
                                    rotation="rotate(5deg)"
                                    text="Learning Time"
                                />
                                <Polaroid 
                                    imageUrl="/images/SummerProgram/lunch-time-img.png"
                                    text="Lunch Time"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}