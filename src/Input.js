import React from 'react';
import { useState, useEffect} from 'react';
import './Input.css'
import Item from './item.js'

function deleteFromArray(array, index){
    delete array[index];
}

function InputFeild(props){
    const existingTodos = localStorage.getItem('todos');
    const [inputt, setInput] = useState(JSON.parse(existingTodos));
    const [text, setText] = useState('');

    const childData = (recievedData) => {
        setInput(delete inputt[recievedData]);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(inputt));
    },[inputt]);
    
    return(
        <>
        <div className='form-group'>
            <form>
            <input type="text" maxlength = "40" value={text} className='inputFeild' onChange={e => setText(e.target.value)}/>
            <br></br>
            <input type='submit' value={props.text} className='button' onClick={() =>{
                if(text === ''){
                    return;
                }else{
                    if(text.length > 100){
                        return
                    }else
                    setInput(arr => [...arr, text]);
                    setText('');
                }
                
            }}/>
            <input type='button' value='clear' className='button' onClick={() =>{
                setInput(inputt => []);
            }}/>
            </form>
        </div>
        <div>
            
            {inputt.map(e => {
                return(
                    <Item index={inputt.indexOf(e)} text={e} array={inputt} recievedChildData={this.childData}/>
                );
            })}
            
        </div>
        </>
    ); 
}

export default InputFeild;