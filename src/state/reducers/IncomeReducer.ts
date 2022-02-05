export type IncomeProps = {
    id: number
    name: string
    total: number
    date: string
}

export type IncomeState = {
    income: IncomeProps[]
    totalIncome: number
}
type ActionProps = {
    type: "ADD_INCOME" | "COUNT_TOTAL_INCOME" | "DELETE_INCOME"
    payload: IncomeProps
}

const INITIAL_STATE = {
    income: [],
    totalIncome: 0
};

const IncomeReducer = (state: IncomeState = INITIAL_STATE, action: ActionProps) => {

    switch (action.type) {
        case "ADD_INCOME":
            return {
                ...state,
                income: [...state.income, action.payload]
            }
        case "COUNT_TOTAL_INCOME":
            const countTotal = state.income.reduce((acc, value) => {
                return acc + value.total;
            }, 0)
            return {
                ...state,
                totalIncome: countTotal
            }
        case "DELETE_INCOME":
            const deleted = state.income.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                income: deleted
            }
        default:
            return state;
    }
};

export default IncomeReducer;