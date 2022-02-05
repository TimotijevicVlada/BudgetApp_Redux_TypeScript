import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from '../../validation/Validation';

const ExpenseForm = () => {

    const dispatch = useDispatch();
    const expense = useSelector((state: any) => state.expense.expense);

    //Formik library
    const formik = useFormik({
        initialValues: {
            id: 0,
            name: "",
            total: 0,
            date: ""
        },
        validate,
        onSubmit: (values) => {
            const newExpense = {
                id: Math.floor(Math.random() * 1000000),
                name: values.name,
                total: values.total,
                date: new Date().toDateString()
            }
            dispatch({ type: "ADD_EXPENSE", payload: newExpense });
        }
    });

    useEffect(() => {
        dispatch({ type: "COUNT_TOTAL_EXPENSE" })
    }, [dispatch, expense])

    return (
        <form onSubmit={formik.handleSubmit} className='expense_form'>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name="name"
                type="text"
                placeholder='Add expense...'
            />
            {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
            )}
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.total}
                name="total"
                type="number"
                placeholder='$0'
            />
            {formik.touched.total && formik.errors.total && (
                <div className="error">{formik.errors.total}</div>
            )}
            <div className='btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
};

export default ExpenseForm;