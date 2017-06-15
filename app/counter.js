import React from 'react'

export const Button = (props) => {
    let counter = 0;
    let label;
    
    const handleClick = () => {
        counter++;
        updateCounter();
    };

    const updateCounter = () => {
        label.innerHTML = counter;
    };
    
    const divStyle = {
        border : '1px solid purple',
        padding: '10px 10px',
        margin : '10px 10px'
    };
    
    return <div style={divStyle}>Counter:<span ref={(input)=>{label=input;}}>{counter}</span><br/><input type='button' onClick={handleClick} value={props.label}/></div>;
}