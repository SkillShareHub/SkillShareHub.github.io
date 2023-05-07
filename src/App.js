import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact  from './Contact';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
          </Routes>
          </div>
            );
  }
}

export default App;