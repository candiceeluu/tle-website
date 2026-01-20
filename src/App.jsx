import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Programs from './pages/Programs/Programs'
import AfterSchoolPrograms from './pages/After-School-Programs/AfterSchoolPrograms';
import ElementaryProgram from './pages/After-School-Programs/ElementaryProgram';
import MiddleSchoolProgram from './pages/After-School-Programs/MiddleSchoolProgram';
import HighSchoolProgram from './pages/After-School-Programs/HighSchoolProgram';
import SummerProgram from './pages/SummerProgram';
import MathPrep from './pages/MathPrep';
import About from './pages/About';
import Careers from './pages/Careers';
import ScrollToTop from './components/ScrollToTop';
import PrivateTutoring from './pages/PrivateTutoring';
import Contact from './pages/Contact';

function App() {
 return (
  <>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/programs" element={<Programs />} />
    <Route path="/after-school-programs" element={<AfterSchoolPrograms />} />
    <Route path="/elementary-program" element={<ElementaryProgram />} />
    <Route path="/middle-school-program" element={<MiddleSchoolProgram />} />
    <Route path="/high-school-program" element={<HighSchoolProgram />} />
    <Route path="/summer-program" element={<SummerProgram />} />
    <Route path="/math-prep" element={<MathPrep />} />
    <Route path="/about" element={<About />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/private-tutoring" element={<PrivateTutoring />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </>
 )
}

export default App