import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>








    </div>
  );
}

export default App;
