import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO
} from "./actions-type"

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = (todoId) => ({
    type: REMOVE_TODO,
    payload: todoId
})

export const updateTodo = (todo, id) => ({
    type: UPDATE_TODO,
    payload: { todo: todo, todoId: id }
}) 