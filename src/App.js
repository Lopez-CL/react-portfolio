import './App.css';
import {React, useState} from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './views/Portfolio';
import Resume from './components/Resume';
function App() {
  const [footerDown, setFooterDown] = useState(false)
  /*  
    * same sizes across headers
    * same size for all p elements
    * less margin around carousel
    * more margin around top heading
    * UPPER CASE button text */
  return (
    <div className='app-container' >
      <BrowserRouter>
        <Navbar/>
        <Home footer = {footerDown} setFooterDown = {setFooterDown}/>
        <Routes>
          <Route path="/:str"  element={<Portfolio/>}/>
          <Route path="/resume"  element={<Resume/>}/>
        </Routes>
        <div>
          <Footer footer = {footerDown}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
