import logo from './logo.svg';
import './App.css';
import './About.css';

import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Card from './components/Card';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Home from './Page/Home';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Home/>
     
    </div>
  );
}

export default App;
