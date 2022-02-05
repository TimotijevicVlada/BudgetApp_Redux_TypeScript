import { ExpenseProps } from "../reducers/ExpenseReducer"

export const AddExpense = (expense: ExpenseProps) => ({
    type: "ADD_EXPENSE",
    payload: expense
})
export const CountExpense = () => ({
    type: "COUNT_TOTAL_EXPENSE"
})
export const DeleteExpense = (expense: ExpenseProps) => ({
    type: "DELETE_EXPENSE",
    payload: expense
})