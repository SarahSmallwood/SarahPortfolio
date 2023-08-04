import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import SubNav from './components/SubNav';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ApiCall from './components/ApiCall';
import Projects from './components/ApiCall';
import Skills from './components/Skills';



function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SubNav />
      <div className="profileText">
        <h1 className="titleText">Sarah Smallwood</h1>
        <p className="jobText">Software Engineer, Web Developer</p>
      </div>
    

    <Routes>
      <Route path="/" element={<ApiCall />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes> 
     


    </div>
  );
}

export default App;
