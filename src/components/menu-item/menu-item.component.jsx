import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.style..scss'

const MenuItem = ({title, imgURL, size, history, urlLink}) => {
    return(
        <div className={`${size} menu-item`} style={
            {
                backgroundImage: `url(${imgURL})`
            }
        } onClick={() => history.push(`${urlLink}`)}
        >
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);