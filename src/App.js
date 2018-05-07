import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'components/Button'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Components</h1>
        <h2>Button</h2>
        <Button>Green</Button>
        <Button type='blue'>Blue</Button>
        <Button type='red'>Red</Button>
        <Button type='grey'>Grey</Button>
        <Button type='black'>Black</Button>
        <Button type='purple'>purple</Button>
      </div>
    )
  }
}

export default App;
