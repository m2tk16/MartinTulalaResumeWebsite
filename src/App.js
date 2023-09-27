import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./Home"
import AboutMe from "./AboutMe"
import NavBar from "./NavBar"

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </Router>
    </>
    
  )
};


export default App;