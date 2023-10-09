import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import SubNav from './components/SubNav';
import Gallery from './modules/Gallery';
import Header from './components/Header';
import ApiCall from './modules/Github';
import Projects from './modules/Github';
import Skills from './modules/Skills';



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
      <Route path="/apicall" element={<ApiCall />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/skills" element={<Skills />} />
    </Routes> 
     


    </div>
  );
}

export default App;
