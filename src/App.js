import React, { Component } from 'react';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <p style={{ fontSize: '3rem' }}>Child 1</p>
          <p style={{ fontSize: '3rem' }}>Child 2</p>
          <p style={{ fontSize: '3rem' }}>Child 3</p>
          <p style={{ fontSize: '3rem' }}>Child 4</p>
        </Carousel>
      </div>
    );
  }
}

export default App;
