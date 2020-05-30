import React, {PropTypes} from 'react';
import './text.css';

function Text({ type, children }) {
    return(
        <p className={type+ 'text'}>
            {children}
            </p>
    
    );
}

export default Text;