import React, { useState } from 'react';

function getRandomCorlor(){
    const arrColor = ['green','red','blue','black']
    const randomIndexCorlor = Math.trunc(Math.random() * 4);
    return arrColor[randomIndexCorlor];
}

function ReactHook(props) {
    const innitColor = localStorage.getItem('color-box') || 'black';
    const [color, setCorlor] = useState(innitColor)
    
    const changeCorlorHandler = () => {
        let colorDefault = getRandomCorlor();
        setCorlor(localStorage.getItem('color-box'));
        localStorage.setItem('color-box',colorDefault);
    }

    return (
        <div 
            className="color-box"
            style={{ backgroundColor: color}}
            onClick={changeCorlorHandler}
        >
            CORLOR BOX
        </div>
    );
}

export default ReactHook;