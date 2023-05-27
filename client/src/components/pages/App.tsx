import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import MainList from './MainList';
import List from './List';

import '../../styles/App.css';

const App = ()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/best" element={<MainList tag="best"/>} />
          <Route path="/new" element={<MainList tag="new" />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
