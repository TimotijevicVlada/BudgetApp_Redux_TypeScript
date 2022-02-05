import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

    const dispatch = useDispatch();
    const totalIncome = useSelector((state: any) => state.income.totalIncome);
    const totalExpense = useSelector((state: any) => state.expense.totalExpense);
    const totalBudget = useSelector((state: any) => state.total.total);

    const total = totalIncome - totalExpense;

    useEffect(() => {
        dispatch({ type: "COUNT_TOTAL", payload: total })
    }, [dispatch, total, totalIncome, totalExpense])

    return (
        <header className='header'>
            <div className='app_name'>
                <h1>Budget App</h1>
            </div>
            <div className='balance'>
                <div>Your Balance</div>
                <div>${totalBudget}.00</div>
            </div>
            <div className='income_expenses'>
                <div className='header_income'>
                    <div>Income</div>
                    <div>+${totalIncome}.00</div>
                </div>
                <div className='header_expense'>
                    <div>Expense</div>
                    <div>-${totalExpense}.00</div>
                </div>
            </div>
        </header>
    )
};

export default Header;
