import React, { useReducer } from 'react'

const initialState = { firstCounter: 0, secondCounter: 10 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h5 className="font-weight-bold">
        Count: {count.firstCounter} / Count Num2: {count.secondCounter}
      </h5>
      <div>
        <button
          onClick={() => dispatch({ type: 'increment', value: 1 })}
          className="btn btn-primary my-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement', value: 1 })}
          className="btn btn-primary m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className="btn btn-primary m-2"
        >
          Reset
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => dispatch({ type: 'increment', value: 5 })}
          className="btn btn-primary my-2"
        >
          Increment 5
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement', value: 5 })}
          className="btn btn-primary m-2"
        >
          Decrement 5
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => dispatch({ type: 'increment2', value: 10 })}
          className="btn btn-primary my-2"
        >
          Increment 10
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement2', value: 10 })}
          className="btn btn-primary m-2"
        >
          Decrement 10
        </button>
      </div>
    </div>
  )
}

export default CounterTwo
