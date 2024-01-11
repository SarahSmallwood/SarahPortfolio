import {Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Gallery from './modules/Gallery';
import Header from './components/Header';
import Travel from './modules/Travel';
import Skills from './modules/Skills';
import NavBar from './components/NavBar';
import AboutMe from './modules/AboutMe';


function App() {
  return (
    <div className="App">
    <NavBar />
    <div className="profileText">
        <h1 className="titleText">Sarah Elizabeth</h1>
        <p className="jobText">Software Engineer, Web Developer, Travel Photographer</p>
      </div>
  
    <Routes>
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/aboutme" element={<AboutMe/>} />
    </Routes> 
    <Footer />
     


    </div>
  );
}

export default App;
