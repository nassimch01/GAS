import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Contact />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>








    </div>
  );
}

export default App;
