import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import MainPage from './page/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
