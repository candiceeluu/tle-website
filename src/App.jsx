import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Programs from './pages/Programs/Programs'
import AfterSchoolPrograms from './pages/After-School-Programs/AfterSchoolPrograms';

function App() {
 return (
  <>
  <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/programs" element={<Programs />} />
    <Route path="/after-school-programs" element={<AfterSchoolPrograms />} />
  </Routes>
  </>
 )
}

export default App