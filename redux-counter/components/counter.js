import React from "react"

export const Counter = props => {
  return <div>
    <button onClick={props.onIncrement}>+</button>
    <br/>
    <button onClick={props.onDecrement}>-</button>
  </div>  
};