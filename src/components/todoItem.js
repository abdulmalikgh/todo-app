import { useDispatch } from 'react-redux'
import { deleteTodo } from '../store/actions'

export default function TodoItem({ todo }) {
    const dispatch = useDispatch()

    const handleDelete = function(id){
        dispatch(deleteTodo(id))
    }   
    return (
        <li>
           <div className='card my-4 p-3'>
                <div className='todo_text'>
                    <p>
                        { todo.text }
                    </p>
                </div> 
                <div className='todo_icons d-flex justify-content-end'>
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(todo.id)}>
                        Delete
                    </button>
                </div>
           </div>
        </li>
    )
}
