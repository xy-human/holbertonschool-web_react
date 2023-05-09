import React from 'react';
import './Notifications.css'
import CloseIcon from './close-icon.png'
import { getLatestNotification } from './utils';

export default function Notifications () {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            <button type = "button" aria-label="close" style={{
                float: "right",
                position: "relative",
                top: "-40px",
                background: "transparent",
                border: "none"
            }}
            onClick={()=> console.log("Close button has been clicked")}>
                <img src={CloseIcon} alt="Close Icon" style={{ width: '8px', height: '8px' }}/>
            </button>
        </div>
    );
};