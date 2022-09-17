import React, { useState } from 'react';
import './CalendarGlance.css';
import PlusIcon from '../icons/PlusIcon';
import CalendarIcon from '../icons/CalendarIcon';
import CloseIcon from '../icons/CloseIcon';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

function CalendarGlance(props) {
    const {user} = props;
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
        <div className='mainWidgets calendarGlance' style={{ backgroundColor: user.settings?.theme }}>
            <div className='calendarHeader'>
                <CalendarIcon user={user} iconClass='calendarListIcon' />
                <h2>Calendar Events</h2>
            </div>
            <div className='calendarContainer'>
                {
                    view === 'list' ? 
                    <CalendarList
                    user={user}
                    setView={setView}
                    setCalendarEventID={setCalendarEventID} /> :
                    <CalendarForm
                    user={user}
                    calendarEventID={calendarEventID}
                    setView={setView}
                    setCalendarEventID={setCalendarEventID} />
                }
            </div>
            {
                view === 'list' ?
                <div onClick={ viewHandler } className='plusIconContainer'>
                    <PlusIcon user={user} iconClass='addIcon' />
                </div>:
                <div onClick={ viewHandler } className='closeIconContainer'>
                    <CloseIcon user={user} iconClass='closeIcon' />
                </div>
            }
            
        </div>
    );
};

export default CalendarGlance;