import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/templatemo-style.css'; // If this CSS is inside src/css/
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <AboutUs />
      <Photos />

    </div>
  );
}

export default App;
