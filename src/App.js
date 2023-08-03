import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import SubNav from './components/SubNav';
import Gallery from './components/Gallery';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SubNav />

    <Routes>
      <Route path="/gallery" element={<Gallery/>} />
    </Routes> 
     


    </div>
  );
}

export default App;
