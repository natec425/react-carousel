import React, { Component } from 'react';
import Carousel from './Carousel';

class App extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <p>Child 1</p>
          <p>Child 2</p>
          <p>Child 3</p>
        </Carousel>
      </div>
    );
  }
}

export default App;
