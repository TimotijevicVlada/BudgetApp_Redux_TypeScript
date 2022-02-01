type BudgetProps = {
    balance: number
    income: number
    expense: number
}

type BudgetAction = {
    type: "CALCULATE_BUDGET"
    payload: number
}

const INITIAL_STATE = {
    balance: 0,
    income: 0,
    expense: 0
};

const BudgetReducer = (state: BudgetProps = INITIAL_STATE, action: BudgetAction) => {

    switch (action.type) {
        case "CALCULATE_BUDGET":

            return {
                balance: 0,
                income: 0,
                expense: 0
            };

        default:
            return state;
    }
};

export default BudgetReducer;