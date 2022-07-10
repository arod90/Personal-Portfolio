import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <section className="welcome-section">
        <div className="welcome-left">
          <h2>Andres Rodriguez</h2>
          <div className="h3-cont">
            <h3 className="h3-1">Full stack Developer</h3>
            <h3 className="h3-2">UI / UX Enthusiast.</h3>
          </div>
        </div>
        <div className="welcome-right">
          <div className="sections">
            <ul>
              <li>
                <span>01</span> About Me
              </li>
              <li>
                <span>02</span> Technologies
              </li>
              <li>
                <span>03</span> My Work
              </li>
              <li>
                <span>04</span> Contact Me
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
