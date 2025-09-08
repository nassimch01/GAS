import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Photos from './components/Photos';



function App() {
  const headerRef = useRef(null);

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>








    </div>
  );
}

export default App;
