import { DELETE_TODO, ADD_TODO, EDIT_TODO } from './const'
let nextTodoId = 0
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        text: todo.text,
        id: nextTodoId++
    }
}
export function deleteTodo(id) {
    return {
        type : DELETE_TODO,
        id:id
    }
}
