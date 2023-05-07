import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

const endpoint = "https://skillsharehub.com/skillsharehub";

function App() {
  return (
    
    <div className="App">
          <nav>
            <ul id="navigation">
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/about">About</Link>
             </li>
             <li>
                 <Link to="/contact">Contact</Link>
             </li>
            </ul>
         </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
