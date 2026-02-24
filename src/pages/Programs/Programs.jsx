import Header from '/src/components/layout/Header';
import Footer from '/src/components/layout/Footer';
import './Programs.css'
import { Link } from 'react-router-dom';
import FooterCard from '/src/components/ui/FooterCard';
import Hero from '/src/components/blocks/AllPrograms/Hero';
import AllPrograms from '/src/components/blocks/AllPrograms/AllPrograms';

function Programs() {
    return (
        <>
        <Header />
        <Hero />
        <AllPrograms />
        <FooterCard
            title="Questions?"
            description="Give us a call at (909)-444-1871 or email us at totallearningeducation@gmail.com for more information."
            hasButton={false}
        />
        <Footer />
        </>
    )
}

export default Programs