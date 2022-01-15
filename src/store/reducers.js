import { DELETE_TODO, ADD_TODO, EDIT_TODO } from './const'
export default function todoApp(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                    ...state,
                    {
                        text: action.text,
                        id: action.id
                    }
                ]
        case DELETE_TODO: 
            return state.filter( todo => todo.id !== action.id)
        default:
          return state;
    }
    
}