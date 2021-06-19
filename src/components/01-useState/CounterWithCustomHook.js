import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100)

    return (
        <>
            <h1> Counter with hook: {state}</h1>
            <hr/>
            <button onClick={()=> increment(1)} className="btn btn-primary"> +1 </button>
            <button onClick={reset} className="btn btn-primary"> Reset </button>
            <button onClick={()=> decrement(1)} className="btn btn-primary"> -1 </button>
        </>
    )
}
