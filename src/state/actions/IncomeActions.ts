import { IncomeProps } from "../reducers/IncomeReducer"

export const AddIncome = (income: IncomeProps) => ({
    type: "ADD_INCOME",
    payload: income
})
