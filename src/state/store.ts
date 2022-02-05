import { combineReducers, createStore } from "redux";
import IncomeReducer from "./reducers/IncomeReducer";
import ExpenseReducer from "./reducers/ExpenseReducer";
import TotalBudgetReducer from "./reducers/TotalBudgetReducer";


const root = combineReducers({
    income: IncomeReducer,
    expense: ExpenseReducer,
    total: TotalBudgetReducer
});

export const store = createStore(root);