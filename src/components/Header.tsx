import React from 'react';

const Header = () => {
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
                    <div>+$0.00</div>
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
