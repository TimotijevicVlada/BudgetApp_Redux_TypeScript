export type IncomeProps = {
    id: number
    name: string
    total: number
    date: string
}

type IncomeState = {
    income: IncomeProps[]
    totalIncome: number
}
type ActionProps = {
    type: "ADD_INCOME" | "COUNT_TOTAL_INCOME"
    payload: string | number
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
                console.log(acc);
                console.log(value);
                return acc + value.total;
            }, 0)
            return {
                ...state,
                totalIncome: countTotal
            }
        default:
            return state;
    }
};

export default IncomeReducer;