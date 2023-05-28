import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/actions-type";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload)
        case UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.todoId) {
                    todo.title = action.payload.todo.title;
                    todo.decription = action.payload.todo.title;
                }
                return todo
            })
        default:
            return [...state];
    }

}