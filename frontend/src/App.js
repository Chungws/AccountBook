import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import MainPage from './page/main';
import SummaryPage from './page/summary';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/summary" element={<SummaryPage/>} />
          </Routes>
        </Wrapper>
      </div>
    );
  }
}

export default App;
