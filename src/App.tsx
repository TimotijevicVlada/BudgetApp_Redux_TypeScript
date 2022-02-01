import React from 'react';
import Expense from './components/Expense';
import Header from './components/Header';
import Income from './components/Income';
import './style/App.css';

function App() {




  return (
    <div className="App">
      <Header />
      <Income />
      <Expense />
    </div>
  );
}

export default App;
