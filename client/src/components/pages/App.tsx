import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import MainList from './MainList';

import '../../styles/App.css';

const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/best" element={<MainList tag="베스트셀러"/>} />
          <Route path="/new" element={<MainList tag="신간" />} />
          <Route path="/list" element={<MainList tag="서적 목록" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
