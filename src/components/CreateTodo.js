import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions'

export default function CreateTodo() {

    const [todo, setTodo] = useState("")
    const [todoErr, setTodoErr] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!todo) {
            setTodoErr("Please Enter todo")
            return
        } else {
            setTodoErr("")
        }
        const data = {
            text: todo
        }
        dispatch(addTodo(data))
        setTodo('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='row pt-5'>
                <div className="col-md-9">
                    <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" className="form-control"
                     id="todo" placeholder="Add todo" />
                     {todoErr && <small className='text-danger'>{todoErr}</small>}
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
                </div>
            </div>
        </form>
    )
}
