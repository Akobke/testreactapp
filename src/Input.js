import React from 'react';
import { useState, useEffect, useRef } from 'react';

function InputFeild(props){
    const existingTodos = localStorage.getItem('todos');
    const [inputt, setInput] = useState(JSON.parse(existingTodos));
    const [text, setText] = useState('');


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(inputt));
    },[inputt]);
    
    return(
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <input type='submit' value={props.text} onClick={() =>{
                setInput(arr => [...arr, text]);
                setText('');
            }}/>
            <input type='button' value='clear' onClick={() =>{
                setInput(inputt => []);
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