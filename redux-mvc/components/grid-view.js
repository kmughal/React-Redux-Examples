import React from 'react'

export default (props) => {
    let counter = 0;
    if (props.tasks.length > 0) { 
    return <table>
                <thead><tr><td>Name</td><td>Description</td></tr></thead>
                <tbody> {props.tasks.map(task => <tr key={counter++}><td>{task.name}</td><td>{task.description}</td></tr>)} </tbody>
           </table>
    } else {
        return <h1>Empty</h1>;
    }
};