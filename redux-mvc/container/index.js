import React from "react"
import { connect } from "react-redux"
import {bindActionCreators} from "redux"


import GridView from "../components/grid-view"
import InputPanel from "../components/input-panel"

import {ADD_NEW} from "../actions/index"

const App =({todos ,actions})=> {
    
    return <div>
             <GridView tasks={todos}/>
             <InputPanel save={actions.ADD_NEW}/>
        </div>
};

let mapStateToProps = state => ({
    todos : state.tasks  
});

let mapActionsToProps = dispatch => ({
    actions : bindActionCreators(ADD_NEW,dispatch)
})


export default connect(
    (state)=> {
    return {todos:state};
} , 
dispatch => ({actions:bindActionCreators({ADD_NEW},dispatch)})
)
(App);

 //export default ()=> <h1>hello</h1>