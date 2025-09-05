import { Route, Router, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import PhotoDetail from './components/PhotoDetail';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photodetail" element={<PhotoDetail />} />
      </Routes>








    </div>
  );
}

export default App;
