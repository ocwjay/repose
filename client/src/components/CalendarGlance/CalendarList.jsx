import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CalendarGlance.css';
import CloseIcon from '../icons/CloseIcon';
import EditIcon from '../icons/EditIcon';

function CalendarList(props) {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const {setView, setCalendarEventID, user} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/calendarEvents')
            .then((res) => {
                console.log(res.data);
                setCalendarEvents(res.data);
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
    }, []);

    const removeFromDom = eventID => {
        setCalendarEvents(calendarEvents.filter(event => event._id !== eventID));
    };

    function deleteHandler(eventID) {
        axios.delete(`http://localhost:8000/api/calendarEvents/${eventID}`)
            .then((res) => {
                removeFromDom(eventID);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div>
            {
                calendarEvents.map((event) => (
                    <div key={event._id} className='calendarEntry'>
                        <div>
                            <p className='calendarTitle'>
                                { event.title }
                            </p>
                            <div>
                                <p>
                                    Start: { event.startDateMonth }/{ event.startDateDay }/{ event.startDateYear } &nbsp;
                                    At { event.startTimeHour }:{ event.startTimeMinute } { event.startAmPm }
                                </p>
                                <p>
                                    End: { event.endDateMonth }/{ event.endDateDay }/{ event.endDateYear } &nbsp;
                                    At { event.endTimeHour }:{ event.endTimeMinute } { event.endAmPm }
                                </p>
                            </div>
                        </div>
                        <div className='calendarIconContainer'>
                            <div onClick={ (e) => {
                                setCalendarEventID(event._id);
                                setView('form');
                            } } className='calendarIconDiv'>
                                <EditIcon user={user} iconClass='calendarIcon' />
                            </div>
                            <div onClick={ (e) => deleteHandler(event._id) }>
                                <CloseIcon user={user} iconClass='calendarIcon' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CalendarList;