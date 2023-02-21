import logo from './logo.svg';
import '../styles/App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className='navbar'>
            <Nav />
          </nav>
          <p>
            After completing Manchester Codes excellent bootcamp, finishing in July 2022 I have taken some time to get the other aspects of my world in order. What I mean by this is that I thought I would have no problem welcoming my first child, purchasing a property and changing my career path all at the same time would be absolutly fine. In reality a few months were needed for things to settle down and now I am returning to the laptop and persuing my first forray into coding for a living.
          </p>
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/history' component={Cv} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
