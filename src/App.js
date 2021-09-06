import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App() {
  
  const [mode, setmode] = useState('light');
  

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#000000'
    }else{
      setmode('light');
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading ="Write your text here" mode={mode}/>
          </Route>
        </Switch>
       </div>
       </Router>

    </>      
  );
}

export default App;
