import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import SubNav from './components/SubNav';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Projects from './components/Projects';


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
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/projects" element={<Projects />} />
    </Routes> 
     


    </div>
  );
}

export default App;
