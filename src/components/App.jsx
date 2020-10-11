import React from 'react'
import CounterOne from './CounterOne'
import '../styles.css'

export default function App() {
  return (
    <div className="container m-5">
      <h1 className="text-primary display-4">Hello CodeSandbox</h1>
      <h2 className="text-primary font-weight-light">
        Start editing to see some magic happen!
      </h2>
      <CounterOne />
    </div>
  )
}
