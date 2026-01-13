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
import ScrollToTop from './components/ScrollToTop';

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
  </Routes>
  </>
 )
}

export default App