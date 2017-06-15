import React from "react"
import ReactDOM from  "react-dom"
import {createStore} from "redux"

import {Counter} from "./components/counter"
import {counter} from "./reducers/index"

const store = createStore(counter)
const el = document.getElementById("app");

const render = ()=> ReactDOM.render(
    <div>
        <span>{store.getState()}</span>
        <Counter 
            onIncrement={()=> store.dispatch({type:'INCREASE'})} 
            onDecrement={()=> store.dispatch({type:'DECREASE'})}
        />
    </div>
,
el
)

render()
store.subscribe(render)
