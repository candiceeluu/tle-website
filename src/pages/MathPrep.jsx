import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import HeroCard from "../components/HeroCard"
import MathPrepCard from '../components/MathPrepCard';
import FooterCard from '/src/components/FooterCard';

function MathPrep() {
    return (
        <>
        <Header />
        <HeroCard 
            title="Math Prep"
            description="Our math prep classes provide structured, small-group learning that helps students deepen understanding and succeed in advanced math pathways. With targeted practice and guidance, students are well prepared for placement exams."
            buttonText="Sign Up"
            onButtonClick= ""
            backgroundClass='bg-math-prep'
        />
        {/* add section here with filter. buttons to select either option 1 and option 2. selecting option 1 displays only some of the mathprep cards based on a tag on the math prep card. */}
        <div className='flex-column gap-4 align-center max-width mx-auto border-box px-3 mt-4'>
            <MathPrepCard 
                title="5th Grade Math Placement Test Prep" 
                grade="5th" 
                gradeColorClass="bg-dark-green"
                dates="Saturday Weekly (January - April)"
                requirements="Entering Chaparral, South Pointe, or Suzanne Middle School"
                bulletPointOne="Practice material on the test"
                bulletPointTwo="Develop a strong math foundation"
                bulletPointThree="Achieve placement in advanced math!"
                image="/images/MathPrep/5th-grade-placement-prep-img.png"
                isComingSoon={false}
            />
            <MathPrepCard 
                title="Advanced Algebra Prep I" 
                grade="6th" 
                gradeColorClass="bg-light-blue"
                dates="Weekly (January - April)"
                requirements="6th graders with an A in Advanced Math and plan to take Algebra 2 Honors in high school"
                bulletPointOne="Build a strong foundation in algebra"
                bulletPointTwo="Prepare for future math courses"
                bulletPointThree="Advance to the Calculus course track!"
                image="/images/MathPrep/algebra-1-img.png"
                isComingSoon={false}
            />
            <MathPrepCard 
                title="Advanced Algebra Prep II"
                grade="7th"
                gradeColorClass="bg-purple"
                dates="Weekly (Fall 2026)"
                requirements="Completion of Algebra Prep I or Algebra 1 with a B or better"
                bulletPointOne="Prepare for Algebra 2"
                bulletPointTwo="Function transformations, polynomial operations, and functions"
                bulletPointThree="Advance to the Calculus course track!"
                image="/images/MathPrep/algebra-2-img.png"
                isComingSoon={false}
            />
        </div>

        <div className='flex-column gap-4 align-center max-width mx-auto border-box px-3 mt-4'>
            <h1>Coming Soon...</h1>
            <MathPrepCard 
                title="Advanced Algebra Prep III"
                grade="8th"
                gradeColorClass="bg-red"
                dates="Weekly (Fall 2026)"
                requirements="Completion of Advanced Algebra Prep II or Geometry with a B or better."
                bulletPointOne="Prepare for Algebra 2 & Trigonometry"
                bulletPointTwo="Prepare for future math courses"
                bulletPointThree="Advance to the Calculus course track!"
                image="/images/MathPrep/geometry-img.png"
                isComingSoon={true}
            />
        </div>
        <FooterCard 
            title="Questions?"
            description="Give us a call at (909)-444-1871 or email us at totallearningeducation@gmail.com for more information."
        />
        <Footer />
        </>
    )
}

export default MathPrep