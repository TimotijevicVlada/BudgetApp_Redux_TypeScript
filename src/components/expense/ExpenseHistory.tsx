import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExpenseProps } from '../../state/reducers/ExpenseReducer';

const ExpenseHistory = () => {

  const dispatch = useDispatch();
  const expense = useSelector((state: any) => state.expense.expense);


  return (
    <div className='expense_history'>
      <h2>Transaction history</h2>
      {expense.length > 0 && expense.map((item: ExpenseProps) => (
        <div key={item.id} className='expense_item'>
          <div className='expense_info'>
            <span>{item.name}</span>
            <span>${item.total}</span>
          </div>
          <i onClick={() => dispatch({type: "DELETE_EXPENSE", payload: item})} className='fas fa-trash'></i>
        </div>
      ))}
    </div>
  )
};

export default ExpenseHistory;
