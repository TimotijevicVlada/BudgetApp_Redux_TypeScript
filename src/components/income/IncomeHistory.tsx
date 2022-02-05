import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IncomeProps } from '../../state/reducers/IncomeReducer';

const IncomeHistory = () => {

  const dispatch = useDispatch();
  const income = useSelector((state: any) => state.income.income);


  return (
    <div className='income_history'>
      <h2>Transaction history</h2>
      {income.length > 0 && income.map((item: IncomeProps) => (
        <div key={item.id} className='income_item'>
          <div className='income_info'>
            <span>{item.name}</span>
            <span>${item.total}</span>
          </div>
          <i onClick={() => dispatch({type: "DELETE_INCOME", payload: item})} className='fas fa-trash'></i>
        </div>
      ))}
    </div>
  )
};

export default IncomeHistory;
