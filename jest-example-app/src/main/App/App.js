import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import neko from './neko.gif';
import './App.css';

const IMG_SPIN_CLASS = 'App-logo--spin';
const IMG_CLASS = 'App-logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: classnames(IMG_CLASS, IMG_SPIN_CLASS),
      image: logo,
    };
  }

  /**
   * @description click handler for toggling state vars
   */
  toggleState() {
    this.setState(state => ({
      classes:
        state.classes === `${IMG_CLASS} ${IMG_SPIN_CLASS}`
          ? classnames(IMG_CLASS)
          : classnames(IMG_CLASS, IMG_SPIN_CLASS),
      image: state.image === neko ? logo : neko,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.image}
            className={this.state.classes}
            alt="logo"
            onClick={() => this.toggleState()}
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
