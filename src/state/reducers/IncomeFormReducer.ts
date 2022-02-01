
export type FormType = {
    name: string | null
    price: number | null
}

type ActionProps = {
    type: "UPDATE_NAME_VALUE" | "UPDATE_PRICE_VALUE"
    payload: string | number
}

const INITIAL_STATE = {
    name: null,
    price: null
};

const IncomeFormReducer = (state: FormType = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case 'UPDATE_NAME_VALUE':
            return {
                ...state,
                name: action.payload
            };
        case 'UPDATE_PRICE_VALUE':
            return {
                ...state,
                price: action.payload
            };

        default:
            return state;
    }

};

export default IncomeFormReducer;