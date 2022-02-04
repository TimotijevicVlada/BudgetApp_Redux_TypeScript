import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const totalIncome = useSelector((state: any) => state.income.totalIncome);

    console.log(totalIncome);

    return (
        <header className='header'>
            <div className='app_name'>
                <h1>Budget App</h1>
            </div>
            <div className='balance'>
                <div>Your Balance</div>
                <div>$0.00</div>
            </div>
            <div className='income_expenses'>
                <div className='header_income'>
                    <div>Income</div>
                    <div>+${totalIncome}</div>
                </div>
                <div className='header_expense'>
                    <div>Expense</div>
                    <div>-$0.00</div>
                </div>
            </div>
        </header>
    )
};

export default Header;
