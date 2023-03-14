import '../styles/App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
