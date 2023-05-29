import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todo-reducers";

const reducers = combineReducers({ todos: todoReducer, })
const store = createStore(reducers);

export default store;