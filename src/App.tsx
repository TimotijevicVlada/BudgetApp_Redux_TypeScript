import React from 'react';
import Expense from './components/expense/Expense';
import Header from './components/Header';
import Income from './components/income/Income';
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
