import { combineReducers, createStore } from "redux";
import IncomeReducer from "./reducers/IncomeReducer";
import ExpenseReducer from "./reducers/ExpenseReducer";


const root = combineReducers({
    income: IncomeReducer,
    expense: ExpenseReducer
});

export const store = createStore(root);