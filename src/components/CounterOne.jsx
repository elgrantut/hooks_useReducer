import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h5 className="font-weight-bold">Count - {count}</h5>
      <button
        onClick={() => dispatch('increment')}
        className="btn btn-primary my-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch('decrement')}
        className="btn btn-primary m-2"
      >
        Decrement
      </button>
      <button onClick={() => dispatch('reset')} className="btn btn-primary m-2">
        Reset
      </button>
    </div>
  )
}

export default CounterOne
