import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/CounterActions'
import './style.css'

const Counter = () => {
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch()


    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count}</h3>
            <button className='increment-btn' onClick={handleIncrement}>Increment</button>
            <button className='decrement-btn'onClick={handleDecrement}>Decrement</button>
            <button className='reset-btn'onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter