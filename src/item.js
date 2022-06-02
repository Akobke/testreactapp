import { render } from '@testing-library/react';
import React from 'react';
import { useState, useEffect} from 'react';

const Item = (props) =>{
    const [visible, setVisible] = useState(true);
    const updateParentArray = () => {
        this.props.recieveChildData(props.index);
    };
    if(visible){
        return(
            <>
            
            <input type='button' value="Delete" onClick={() => {
                setVisible(false);
                updateParentArray();
            }}/>
            <h1>{props.text}</h1>
            <p>{props.array}</p>
            </>
        );
    }else{
        return(()=>{
            this.state.showComponent = false;
        });
    }
}
export default Item;