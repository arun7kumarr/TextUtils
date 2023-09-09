// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Aleret from "./components/Aleret";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enanle or not
  const [aleret,setAleret] = useState(null);

  const showAleret =(message,type)=>{
    setAleret({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAleret(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAleret("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAleret("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light mode'
    }
  }

  
  return (
    <>
    <Router>
      <Navbar title="Textutils" Abouttext ="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Aleret aleret ={aleret}/>
      {/* <Navbar ></Navbar> */}
      <div className="container">
    
      <Routes>
          			<Route exact path="/" element={<Textform showAleret={showAleret} heading="Enter the text to analyze below" mode={mode}/>} />
          			<Route exact path="/about" element={<About mode={mode}/>} />
                {/* exact use for exact maching */}
        		</Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
