import React,  {PropTypes} from 'react';

import './button.css';

function Button ({ type, children, clickHandler }) {
    return (
        <button onClick = {clickHandler} className = {type}>
            {children}
            </button>
    );
}
export default Button;