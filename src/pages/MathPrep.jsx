import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import HeroCard from "../components/HeroCard"
import MathPrepCard from '../components/MathPrepCard';
import FooterCard from '/src/components/FooterCard';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const FILTERS = {
    ALL: 'all',
    PREP: 'prep',
    ADVANCED: 'advanced'
}

const TITLES = {
    'all': 'All Programs',
    'prep': 'Prep Classes',
    'advanced': "AP Classes"
}

const mathPrepPrograms = [
    {
        title: "5th Grade Math Placement Test Prep",
        grade: "5th",
        gradeColorClass: "bg-dark-green",
        dates: "Saturday Weekly (January - April)",
        instructor: "Eddie Lu",
        requirements: "Entering Chaparral, South Pointe, or Suzanne Middle School",
        bulletPointOne: "Practice material on the test",
        bulletPointTwo: "Develop a strong math foundation",
        bulletPointThree: "Achieve placement in advanced math!",
        image: "/images/MathPrep/5th-grade-placement-prep-img.png",
        isComingSoon: false,
        tag: "prep"
    },
    {
        title: "Advanced Algebra Prep I",
        grade: "6th",
        gradeColorClass: "bg-light-blue",
        dates: "Weekly (January - April)",
        instructor: "Eddie Lu",
        requirements: "6th graders with an A in Advanced Math and plan to take Algebra 2 Honors in high school",
        bulletPointOne: "Build a strong foundation in algebra",
        bulletPointTwo: "Prepare for future math courses",
        bulletPointThree: "Advance to the Calculus course track!",
        image: "/images/MathPrep/algebra-1-img.png",
        isComingSoon: false,
        tag: "prep"
    },
    {
        title: "Advanced Algebra Prep II",
        grade: "7th",
        gradeColorClass: "bg-purple",
        dates: "Weekly (Fall 2026)",
        instructor: "Eddie Lu",
        requirements: "Completion of Algebra Prep I or Algebra 1 with a B or better",
        bulletPointOne: "Prepare for Algebra 2",
        bulletPointTwo: "Function transformations, polynomial operations, and functions",
        bulletPointThree: "Advance to the Calculus course track!",
        image: "/images/MathPrep/algebra-2-img.png",
        isComingSoon: false,
        tag: "prep"
    },
    {
        title: "Advanced Algebra Prep III",
        grade: "8th",
        gradeColorClass: "bg-red",
        dates: "Weekly (Fall 2026)",
        instructor: "Eddie Lu",
        requirements: "Completion of Advanced Algebra Prep II or Geometry with a B or better.",
        bulletPointOne: "Prepare for Algebra 2 & Trigonometry",
        bulletPointTwo: "Prepare for future math courses",
        bulletPointThree: "Advance to the Calculus course track!",
        image: "/images/MathPrep/geometry-img.png",
        isComingSoon: true,
        tag: "prep"
    },
    {
        title: "AP Pre-Calculus",
        grade: "9th-12th",
        gradeColorClass: "bg-red",
        dates: "Weekly (Fall 2026)",
        instructor: "Tam Ngyuen",
        hasRequirements: false,
        bulletPointOne: "Prepare for school tests and the AP Exam",
        bulletPointTwo: "Gain guidance on homework assignments",
        bulletPointThree: "Preview weekly lessons ahead of school schedule",
        image: "/images/MathPrep/geometry-img.png",
        isComingSoon: false,
        tag: "advanced"
    },
    {
        title: "AP Calculus AB",
        grade: "9th-12th",
        gradeColorClass: "bg-red",
        dates: "Weekly (Fall 2026)",
        instructor: "Tam Ngyuen",
        hasRequirements: false,
        bulletPointOne: "Prepare for school tests and the AP Exam",
        bulletPointTwo: "Gain gudiance on homework assignments",
        bulletPointThree: "Preview weekly lessons ahead of school schedule",
        image: "/images/MathPrep/ap-calc-ab.jpg",
        isComingSoon: false,
        tag: "advanced"
    },
    {
        title: "MACH 5 (DBHS Only)",
        grade: "9th-12th",
        gradeColorClass: "bg-red",
        dates: "Weekly (Fall 2026)",
        instructor: "Tam Ngyuen",
        hasRequirements: false,
        bulletPointOne: "Prepare for school tests",
        bulletPointTwo: "Gain guidance on homework assignments",
        bulletPointThree: "Preview weekly lessons ahead of school schedule",
        image: "/images/MathPrep/dbhs.jpeg",
        isComingSoon: false,
        tag: "advanced"
    },
    {
        title: "AP Calculus BC",
        grade: "9th-12th",
        gradeColorClass: "bg-red",
        dates: "Weekly (Fall 2026)",
        instructor: "Tam Ngyuen",
        hasRequirements: false,
        bulletPointOne: "Prepare for AP Pre-Calculus",
        bulletPointTwo: "TBD",
        bulletPointThree: "TBD",
        image: "/images/MathPrep/ap-calc-bc.jpg",
        isComingSoon: false,
        tag: "advanced"
    },
]


function MathPrep() {
    const [searchParams] = useSearchParams()
    const filterFromUrl = searchParams.get('filter') || FILTERS.ALL
    const [activeFilter, setActiveFilter] = useState(filterFromUrl)
    useEffect(() => {
        const filter = searchParams.get('filter') || FILTERS.ALL
        setActiveFilter(filter)
    }, [searchParams])

    const filteredPrograms =
        activeFilter === FILTERS.ALL
            ? mathPrepPrograms
            : mathPrepPrograms.filter(p => p.tag === activeFilter)
    
    const currentFilteredPrograms = filteredPrograms.filter(p => p.isComingSoon === false)
    const comingFiliteredPrograms = filteredPrograms.filter(p => p.isComingSoon === true)



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
       <div className="flex wrap gap-2 space-between mt-2 max-width mx-auto p-2">
            <div>
                <h3>{TITLES[activeFilter]}</h3>
            </div>
            <div className='flex gap-1'>
                <button
                    className={`button ${activeFilter === FILTERS.ALL ? 'bg-green' : ''}`}
                    onClick={() => setActiveFilter(FILTERS.ALL)}
                >
                    All Programs
                </button>

                <button
                    className={`button ${activeFilter === FILTERS.PREP ? 'bg-green' : ''}`}
                    onClick={() => setActiveFilter(FILTERS.PREP)}
                >
                    Prep Classes
                </button>

                <button
                    className={`button ${activeFilter === FILTERS.ADVANCED ? 'bg-green' : ''}`}
                    onClick={() => setActiveFilter(FILTERS.ADVANCED)}
                >
                    AP Classes
                </button>
            </div>
        </div>
        <div className="flex-column gap-4 align-center max-width mx-auto border-box px-3 mt-1">
            {currentFilteredPrograms.map((program, index) => (
                <MathPrepCard key={index} {...program} />
            ))}
            <h2>More Coming Soon...</h2>
            {comingFiliteredPrograms.map((program, index) => (
                <MathPrepCard key={index} {...program} />
            ))}

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