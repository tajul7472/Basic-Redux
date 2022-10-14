import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/TodosActoons'
import './style.css'

const Todos = () => {
    const { isLoding, todos, error } = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllTodos())

    },[])
    return (
        <div>
            <h2>Todos App</h2>
            {isLoding && <h2>Loading....</h2>}
            {error && <h2>{error.message}</h2>}
            <section>
            {todos && todos.map((todo)=>{
                return(
                    <article key={todo.id}>
                    <h4>{todo.id}</h4>
                    <h4>{todo.title}</h4>
                    </article>
                )
            })}
            </section>


        </div>
    )
}

export default Todos