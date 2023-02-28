import '../styles/App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Cv from './Cv';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className='navbar'>
            <Nav />
          </nav>
        </header>
        <main>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/history' component={Cv} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
