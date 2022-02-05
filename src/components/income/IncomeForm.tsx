import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from '../../validation/Validation';

const IncomeForm = () => {

    const dispatch = useDispatch();
    const income = useSelector((state: any) => state.income.income);

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
            const newIncome = {
                id: Math.floor(Math.random() * 1000000),
                name: values.name,
                total: values.total,
                date: new Date().toDateString()
            }
            dispatch({ type: "ADD_INCOME", payload: newIncome });
        }
    });

    useEffect(() => {
        dispatch({ type: "COUNT_TOTAL_INCOME" })
    }, [dispatch, income])

    return (
        <form onSubmit={formik.handleSubmit} className='income_form'>
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name="name"
                type="text"
                placeholder='Add income...'
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

export default IncomeForm;
