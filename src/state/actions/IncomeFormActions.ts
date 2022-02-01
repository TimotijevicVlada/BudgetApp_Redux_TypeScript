import { FormType } from "../reducers/IncomeFormReducer";

export const UpdateName = (name: FormType) => ({
    type: "UPDATE_NAME_VALUE",
    payload: name
})

export const UpdatePrice = (price: FormType) => ({
    type: "UPDATE_PRICE_VALUE",
    payload: price
})