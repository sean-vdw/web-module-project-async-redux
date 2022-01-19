import React from 'react';
import './App.css';

import Nav from './components/Nav';
import StockList from './components/StockList';

function App() {
  return (
    <div className="App">
      <Nav />
      <StockList />
    </div>
  );
}

export default App;