import { IncomeProps } from "../reducers/IncomeReducer"

export const AddIncome = (income: IncomeProps) => ({
    type: "ADD_INCOME",
    payload: income
})
export const CountIncome = () => ({
    type: "COUNT_TOTAL_INCOME"
})
export const DeleteIncome = (income: IncomeProps) => ({
    type: "DELETE_INCOME",
    payload: income
})
