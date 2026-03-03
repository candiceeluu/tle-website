import HeroCard from '../components/ui/HeroCard';
import FooterCard from '/src/components/ui/FooterCard'
import EnrollmentOpen from '../components/blocks/Summer/EnrollmentOpen';
import OurSummerPrograms from '../components/blocks/Summer/OurSummerPrograms';
import CustomerTestimonials from '../components/blocks/Summer/CustomerTestimonials';

function SummerProgram() {
    return (
        <section className="">
            <HeroCard
                title="Summer Program"
                description="Designed to prepare students for the next academic year, our summer program combines instructional preview, weekly assessments, and enrichment activities. Weekly field trips add a fun, hands-on element to learning throughout the summer."
                buttonText="Sign Up"
                backgroundImage="url('/images/Programs/bg-summer-program.jpg')"
                buttonLink="#our-summer-programs"
                target=""
            />

            <EnrollmentOpen 
                isOpen={true}
            />

            <OurSummerPrograms />

            <CustomerTestimonials />

            <FooterCard 
                title="Questions?"
                description="Give us a call at (909)-444-1871 or email us at totallearningeducation@gmail.com for more information."
            />
        </section>
    )
}

export default SummerProgram