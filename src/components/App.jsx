import React from 'react'
import CounterOne from './CounterTwo'
import '../styles.css'

export default function App() {
  return (
    <div className="container m-5">
      <h1 className="text-primary display-4">React Counter</h1>
      <h2 className="text-primary font-weight-light">
        Counter buttons using hooks.
      </h2>
      <CounterOne />
    </div>
  )
}
