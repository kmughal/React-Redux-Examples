import React from "react"

export default (props)=> {
    let name;
    let description;
    let save = () => props.save({name : name.value,description :description.value}); 
    let InputPanelStyle = {
        border : '1px dotted gray' ,
        padding : '5px 5px' ,
        margin : '5px 5px'
    };
    
    return <div style={InputPanelStyle}>
                <div>
                    <label>Name</label>
                    <input ref={( input ) => { name = input;} } type="text"/>
                </div>
                
                <div>
                    <label>Description</label>
                    <input ref={( input ) => { description = input;}} type="text"/>
                </div>
                
                <div>
                    <button onClick={save}>Save</button>
                </div>
    </div>
}