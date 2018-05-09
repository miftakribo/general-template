import React, { Component } from 'react';
import './App.css';

import Header from 'components/Header'
import Button from 'components/Button'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Components</h1>
        <div>
          <h2>Box</h2>

          <h2>Form</h2>
          <div>
            <h3>Button</h3>
            <Button>Green</Button>
            <Button className='btn-blue'>Blue</Button>
            <Button className='btn-red'>Red</Button>
            <Button className='btn-grey'>Grey</Button>
            <Button className='btn-black'>Black</Button>
          </div>

          <h2>Table</h2>

          <h2>Image</h2>

        </div>

      </div>
    )
  }
}

export default App;
