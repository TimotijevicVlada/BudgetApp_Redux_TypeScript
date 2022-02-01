import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseHistory from './ExpenseHistory';

const Expense = () => {
  return (
      <div className='expense'>
          <ExpenseForm />
          <ExpenseHistory />
      </div>
  )
};

export default Expense;
