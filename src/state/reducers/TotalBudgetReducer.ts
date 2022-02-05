type Total = {
    total: number
}

type ActionProps = {
    type: "COUNT_TOTAL"
    payload: Total
}

const INITIAL_STATE = {
    total: 0
}

const IncomeReducer = (state: Total = INITIAL_STATE, action: ActionProps) => {

    switch (action.type) {
        case "COUNT_TOTAL":
            return {
                total: action.payload
            }

        default:
            return state;
    }
};

export default IncomeReducer;