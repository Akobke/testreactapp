import React from 'react';

function InputFeild(){
    const getInputValue = (event)=>{
        const userType = event.target.value;
        console.log(userType);
    };

    return(
        <input type="text" onChange={getInputValue}/>
    ); 
}

export default InputFeild;