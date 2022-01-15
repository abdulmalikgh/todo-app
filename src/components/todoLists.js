import { useSelector } from 'react-redux'
import TodoItem from './todoItem'

const listStyles = {
    margin:"0px",
    padding:"0px"
}

export default function TodoLists() {
    const todos = useSelector(state => state)
    if(!todos.length) {
        return (
            <div className='row pt-3'>
                <div className='colomn'>
                    <h2 className='text-light'>No todo created</h2>
                </div>
            </div>
        )
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <ul style={listStyles}>
                    { todos.map( todo => <TodoItem todo={todo} key={todo.id} />) }
                </ul>
            </div>
        </div>
    )
}
