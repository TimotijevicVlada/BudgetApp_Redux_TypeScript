import { combineReducers, createStore } from "redux";
import IncomeReducer from "./reducers/IncomeReducer";
import ExpenseReducer from "./reducers/ExpenseReducer";
import IncomeFormReducer from "./reducers/IncomeFormReducer";


const root = combineReducers({
    income: IncomeReducer,
    incomeForm: IncomeFormReducer,
    expense: ExpenseReducer
});

export const store = createStore(root);