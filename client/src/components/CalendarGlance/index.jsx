import React, { useState } from 'react';
import './CalendarGlance.css';
import addIcon from './plus.png';
import addIconWhite from './plus-white.png';
import addIconRed from './plus-red.png';
import addIconBlue from './plus-blue.png';
import addIconPurple from './plus-purple.png';
import closeIcon from './cross.png';
import calendarIcon from './calendar.png';
import calendarIconWhite from './calendar-white.png';
import calendarIconRed from './calendar-red.png';
import calendarIconBlue from './calendar-blue.png';
import calendarIconPurple from './calendar-purple.png';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

function CalendarGlance(props) {
    const {user} = props;
    const [view, setView] = useState('list');
    const [calendarEventID, setCalendarEventID] = useState('');
    const calendarIconSrc = {
        Black: calendarIcon,
        White: calendarIconWhite,
        Red: calendarIconRed,
        Blue: calendarIconBlue,
        Purple: calendarIconPurple
    };
    const addIconSrc = {
        Black: addIcon,
        White: addIconWhite,
        Red: addIconRed,
        Blue: addIconBlue,
        Purple: addIconPurple
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

    const findAddIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return addIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return addIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return addIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return addIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return addIconSrc['Purple'];
        }
    };

    const viewHandler = () => {
        if(view === 'list') {
            setView('form');
        } else {
            setView('list');
            setCalendarEventID('');
        }
    }

    return(
        <div  className='mainWidgets calendarGlance'>
            <div className='calendarHeader'>
                <img src={ findCalendarIconSrc() } alt="" className='calendarListIcon' />
                <h2>Calendar Events</h2>
            </div>
            <div className='calendarContainer'>
                {
                    view === 'list' ? 
                    <CalendarList
                    setView={setView}
                    setCalendarEventID={setCalendarEventID} /> :
                    <CalendarForm
                    calendarEventID={calendarEventID}
                    setView={setView}
                    setCalendarEventID={setCalendarEventID} />
                }
            </div>
            {
                view === 'list' ?
                <img src={ findAddIconSrc() } alt="" className='addIcon' onClick={ viewHandler } /> :
                <img src={ closeIcon } alt="" className='closeIcon' onClick={ viewHandler } /> 
            }
            
        </div>
    );
};

export default CalendarGlance;