import React from 'react';

const IncomeForm = () => {
    return (
        <form className='income_form'>
            <input type="text" placeholder='Add income...' />
            <input type="text" placeholder='$0' />
            <div className='btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
};

export default IncomeForm;
