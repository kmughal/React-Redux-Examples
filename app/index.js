import React from "react"
import ReactDOM from "react-dom"

import {Button} from './counter'

class App extends React.Component {
        
        render() {
            return <div>
                <h1>Test Application</h1>
                <Button label='Counter'/>
            </div>
            }
        }


ReactDOM.render( <App /> , document.getElementById('app'))