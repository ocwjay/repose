import React from 'react';
import calendarIcon from './calendar.png';
import calendarIconWhite from './calendar-white.png';
import calendarIconRed from './calendar-red.png';
import calendarIconBlue from './calendar-blue.png';
import calendarIconPurple from './calendar-purple.png';

function CalendarIcon(props) {
    const {user, iconClass} = props;
    const calendarIconSrc = {
        Black: calendarIcon,
        White: calendarIconWhite,
        Red: calendarIconRed,
        Blue: calendarIconBlue,
        Purple: calendarIconPurple
    };

    const findCalendarIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return calendarIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return calendarIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return calendarIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return calendarIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return calendarIconSrc['Purple'];
        }
    };

    return(
        <img src={ findCalendarIconSrc() } alt="" className={iconClass} /> 
    )
};

export default CalendarIcon;