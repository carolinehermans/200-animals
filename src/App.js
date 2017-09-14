import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.numImages = 190
    this.state = {
      currImgNum: Math.floor(Math.random() * this.numImages) + 1
    }
  }

  resetCurrImgNum() {
    this.setState({currImgNum: Math.floor(Math.random() * this.numImages) + 1})
  }

  render() {
    return (
      <div>
        <img src={`./img/${this.state.currImgNum}.jpg`}/>
        <div className="button" onClick={() => this.resetCurrImgNum()}>
          <div className="button-text noselect">
            Another One
          </div>
        </div>
      </div>
    );
  }
}

export default App;
