import React from 'react';

const ExpenseForm = () => {
    return (
        <form className='expense_form'>
            <input type="text" placeholder='Add expense...' />
            <input type="text" placeholder='$0' />
            <div className='btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
};

export default ExpenseForm;