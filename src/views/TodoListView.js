import React from 'react'
import CreateTodo from '../components/CreateTodo'
import TodoHeader from '../components/TodoHeader'
import TodoLists from '../components/todoLists'

export default function TodoList() {
    return (
        <div className='container'>
           <div className='row justify-content-center pt-5 '>
                <div className='col-md-8'>
                    <TodoHeader />
                    <CreateTodo />
                    <TodoLists />
                </div>   
            </div> 
        </div>
    )
}
