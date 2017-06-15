import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"

import App from "./container"
import reducer from "./reducers"

const store = createStore(reducer)
const el = document.getElementById("app")

render(<Provider store={store}>
    <App/>
</Provider>,el);
