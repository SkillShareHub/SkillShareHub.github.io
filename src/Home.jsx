import './App.css';
import React from 'react';
import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
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
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
            </div>
        );
    }

}

export default Home;