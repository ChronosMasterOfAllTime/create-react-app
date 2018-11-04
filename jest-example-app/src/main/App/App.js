import React, { Component } from 'react';
import logo from './logo.svg';
import neko from './neko.gif';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: logo,
    };
  }

  switchImage() {
    this.setState({
      image: neko,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.image}
            className="App-logo"
            alt="logo"
            onClick={() => this.switchImage()}
          />
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
}

export default App;
