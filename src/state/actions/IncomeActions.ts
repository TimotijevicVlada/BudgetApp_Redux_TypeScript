import { IncomeProps } from "../reducers/IncomeReducer"

export const AddIncome = (income: IncomeProps) => ({
    type: "ADD_INCOME",
    payload: income
})
export const CountIncome = () => ({
    type: "COUNT_TOTAL_INCOME"
})
