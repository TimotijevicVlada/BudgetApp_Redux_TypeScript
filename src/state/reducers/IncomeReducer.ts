export type IncomeProps = {
    id: number
    name: string
    total: number
    date: string
}

type IncomeState = {
    income: IncomeProps[]
}
type ActionProps = {
    type: "ADD_INCOME"
    payload: string | number
}

const INITIAL_STATE = {
    income: []
};

const IncomeReducer = (state: IncomeState = INITIAL_STATE, action: ActionProps) => {

    switch (action.type) {
        case "ADD_INCOME":
            return {
                income: [ ...state.income, action.payload ]
            }

        default:
            return state;
    }
};

export default IncomeReducer;