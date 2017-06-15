import React from 'react'

export class DataEntryForm extends React.Component{
    
    
    render(){
        return <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label htmlFor="">Address</label>
                <input type="text" name="address"/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </div>;
    }
}