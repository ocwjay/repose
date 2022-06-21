import React, { useState } from 'react';
import './CalendarGlance.css';
import addIcon from './plus.png';
import closeIcon from './cross.png';
import todoIcon from './calendar.png';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

function CalendarGlance() {
    const [view, setView] = useState('list');
    const [calendarEventID, setCalendarEventID] = useState('');

    const viewHandler = () => {
        if(view === 'list') {
            setView('form');
        } else {
            setView('list');
            setCalendarEventID('');
        }
    }

    return(
        <div  className='mainWidgets calendarGlance {
            '>
            <div className='calendarHeader'>
                <img src={todoIcon} alt="" className='calendarListIcon' />
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
                <img src={ addIcon } alt="" className='addIcon' onClick={ viewHandler } /> :
                <img src={ closeIcon } alt="" className='closeIcon' onClick={ viewHandler } /> 
            }
            
        </div>
    );
};

export default CalendarGlance;