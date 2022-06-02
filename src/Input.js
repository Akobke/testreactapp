import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Input.css'

function InputFeild(props){
    const existingTodos = localStorage.getItem('todos');
    const [inputt, setInput] = useState(JSON.parse(existingTodos));
    const [text, setText] = useState('');


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(inputt));
    },[inputt]);
    
    return(
        <>
        <div className='form-group'>
            <form>
            <input type="text" value={text} className='inputFeild' onChange={e => setText(e.target.value)}/>
            <br></br>
            <input type='submit' value={props.text} className='button' onClick={() =>{
                setInput(arr => [...arr, text]);
                setText('');
            }}/>
            <input type='button' value='clear' className='button' onClick={() =>{
                setInput(inputt => []);
            }}/>
            </form>
        </div>
        <div>
            <ol>
            {inputt.map(userInput => (<li key={userInput}>{userInput}</li>))}
            </ol>
        </div>
        </>
    ); 
}

export default InputFeild;