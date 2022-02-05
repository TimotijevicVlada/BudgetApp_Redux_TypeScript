export type ExpenseProps = {
    id: number
    name: string
    total: number
    date: string
}

export type ExpenseState = {
    expense: ExpenseProps[]
    totalExpense: number
}
type ActionProps = {
    type: "ADD_EXPENSE" | "COUNT_TOTAL_EXPENSE" | "DELETE_EXPENSE"
    payload: ExpenseProps
}

const INITIAL_STATE = {
    expense: [],
    totalExpense: 0
};

const ExpenseReducer = (state: ExpenseState = INITIAL_STATE, action: ActionProps) => {

    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expense: [...state.expense, action.payload]
            }
        case "COUNT_TOTAL_EXPENSE":
            const countTotal = state.expense.reduce((acc, value) => {
                return acc + value.total;
            }, 0)
            return {
                ...state,
                totalExpense: countTotal
            }
        case "DELETE_EXPENSE":
            const deleted = state.expense.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                expense: deleted
            }
        default:
            return state;
    }
};

export default ExpenseReducer;