import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, ...otherButtonProps}) => {
    return(
        <div>
            <button className='custom-button' {...otherButtonProps}>{children}</button>
        </div>
    );
}

export default CustomButton;