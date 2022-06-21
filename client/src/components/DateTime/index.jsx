import React, { useState } from 'react';
import './DateTime.css';

function DateTime() {
    const [date, setDate] = useState(new Date());
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function refreshClock() {
        setDate(new Date());
    }

    setInterval(refreshClock, 1000);

    return(
        <div  className='mainWidgets dateTime'>
            <p className='date'>{ months[date.getMonth()] } {date.getDate()}, {date.getFullYear()}</p>
            <p className='time'>{ date.toLocaleTimeString([], {timeStyle: 'short'}).replace('AM', '').replace('PM', '') }</p>
        </div>
    );
};

export default DateTime;