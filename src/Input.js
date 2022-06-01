import React from 'react';
import { useState, useEffect, useRef } from 'react';

function InputFeild(props){

    const [inputt, setInput] = useState([]);
    const [text, setText] = useState('');
    
    return(
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <input type='submit' value={props.text} onClick={() =>{
                setText('');
                setInput(arr => [...arr, text]);
            }}/>     
        <div>
            <ol>
            {inputt.map(userInput => (<li key={userInput}>{userInput}</li>))}
            </ol>
        </div>
        </>
    ); 
}

export default InputFeild;