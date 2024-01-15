import {Route, Routes} from 'react-router-dom';
import './App.css';
import Gallery from './modules/Gallery';
import Travel from './modules/Travel';
import Skills from './modules/Skills';
import NavBar from './components/NavBar';
import AboutMe from './modules/AboutMe';
import Home from './modules/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Home />
  
    <Routes>
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/aboutme" element={<AboutMe/>} />
    </Routes> 
    <Footer/>
  
     


    </div>
  );
}

export default App;
