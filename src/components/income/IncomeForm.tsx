import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const IncomeForm = () => {

    const dispatch = useDispatch();
    const formValue = useSelector((state: any) => state.incomeForm);

    console.log(formValue);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "UPDATE_NAME_VALUE", payload: e.target.value });
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "UPDATE_PRICE_VALUE", payload: e.target.value });
    }

    return (
        <form className='income_form'>
            <input
                onChange={(e) => handleNameChange(e)}
                value={formValue.name}
                type="text"
                placeholder='Add income...'
            />
            <input
                onChange={(e) => handlePriceChange(e)}
                value={formValue.price}
                type="text"
                placeholder='$0'
            />
            <div className='btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
};

export default IncomeForm;
