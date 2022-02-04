import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from '../../validation/IncomeValidation';

const IncomeForm = () => {

    const dispatch = useDispatch();
    const income = useSelector((state: any) => state.income.income);

    console.log(income);

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
                date: new Date()
            }
            dispatch({ type: "ADD_INCOME", payload: newIncome });
        }
    });

    useEffect(() => {
        dispatch({ type: "COUNT_TOTAL_INCOME" })
    }, [income])

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
            <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.total}
                name="total"
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
