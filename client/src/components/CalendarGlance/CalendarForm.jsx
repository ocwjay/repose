import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CalendarGlance.css';

function CalendarForm(props) {
    const {calendarEventID, setView} = props;
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const [title, setTitle] = useState('');
    const [startTimeHour, setStartTimeHour] = useState('12');
    const [startTimeMinute, setStartTimeMinute] = useState('00');
    const [startAmPm, setStartAmPm] = useState('AM');
    const [endTimeHour, setEndTimeHour] = useState('12');
    const [endTimeMinute, setEndTimeMinute] = useState('00');
    const [endAmPm, setEndAmPm] = useState('AM');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/calendarEvents/${calendarEventID}`)
            .then((res) => {
                console.log(res.data);
                setStartDateInput(`${res.data.startDateYear}-${res.data.startDateMonth}-${res.data.startDateDay}`);
                setEndDateInput(`${res.data.endDateYear}-${res.data.endDateMonth}-${res.data.endDateDay}`);
                setTitle(res.data.title);
                setStartTimeHour(res.data.startTimeHour);
                setStartTimeMinute(res.data.startTimeMinute);
                setStartAmPm(res.data.startAmPm);
                setEndTimeHour(res.data.endTimeHour);
                setEndTimeMinute(res.data.endTimeMinute);
                setEndAmPm(res.data.endAmPm);
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
        }, [calendarEventID]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(calendarEventID){
            axios.put(`http://localhost:8000/api/calendarEvents/${calendarEventID}`, {
                title,
                startDateDay: startDateInput.split("-")[2],
                startDateMonth: startDateInput.split("-")[1],
                startDateYear: startDateInput.split("-")[0],
                startTimeHour,
                startTimeMinute,
                startAmPm,
                endDateDay: endDateInput.split("-")[2],
                endDateMonth: endDateInput.split("-")[1],
                endDateYear: endDateInput.split("-")[0],
                endTimeHour,
                endTimeMinute,
                endAmPm
            })
                .then( res => {
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        } else {
            axios.post('http://localhost:8000/api/calendarEvents/', {
                title,
                startDateDay: startDateInput.split("-")[2],
                startDateMonth: startDateInput.split("-")[1],
                startDateYear: startDateInput.split("-")[0],
                startTimeHour,
                startTimeMinute,
                startAmPm,
                endDateDay: endDateInput.split("-")[2],
                endDateMonth: endDateInput.split("-")[1],
                endDateYear: endDateInput.split("-")[0],
                endTimeHour,
                endTimeMinute,
                endAmPm
            })
                .then( res => {
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        setStartDateInput('');
        setEndDateInput('');
        setTitle('');
        setStartTimeHour('12');
        setStartTimeMinute('00');
        setStartAmPm('AM');
        setEndTimeHour('12');
        setEndTimeMinute('00');
        setEndAmPm('AM');
        setView('list');
    };

    return(
        <div>
            <form className='calendarForm' onSubmit={submitHandler}>
                <label className='calendarLabel'>
                    Event Title:
                    <input type="text"
                    className='calendarInput calendarTitleInput'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </label>
                <div className='dateTimeContainer'>
                    <label className='dateTimeLabel'>
                        Date:
                        <input type="date"
                        className='dateTimeInput'
                        value={startDateInput}
                        onChange={(e) => setStartDateInput(e.target.value)} />
                    </label>
                    <label className='dateTimeLabel'>
                        At
                        <select
                        value={startTimeHour}
                        onChange={(e) => setStartTimeHour(e.target.value)}
                        className='dateTimeInput'>
                            <option value="12">12</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </label>
                    <label className='dateTimeLabel'>
                        :
                        <select
                        value={startTimeMinute}
                        onChange={(e) => setStartTimeMinute(e.target.value)}
                        className='dateTimeInput'>
                            <option value="00">00</option>
                            <option value="05">05</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="35">35</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                            <option value="55">55</option>
                        </select>
                    </label>
                    <label className='dateTimeLabel'>
                        <select
                        value={startAmPm}
                        onChange={(e) => setStartAmPm(e.target.value)}
                        className='dateTimeInput'>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </label>
                </div>
                <div className='dateTimeContainer'>
                    <label className='dateTimeLabel'>
                        Date:
                        <input type="date"
                        className='dateTimeInput'
                        value={endDateInput}
                        onChange={(e) => setEndDateInput(e.target.value)} />
                    </label>
                    <label className='dateTimeLabel'>
                        At:
                        <select
                        value={endTimeHour}
                        onChange={(e) => setEndTimeHour(e.target.value)}
                        className='dateTimeInput'>
                            <option value="12">12</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </label>
                    <label className='dateTimeLabel'>
                        :
                        <select
                        value={endTimeMinute}
                        onChange={(e) => setEndTimeMinute(e.target.value)}
                        className='dateTimeInput'>
                            <option value="00">00</option>
                            <option value="05">05</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="35">35</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                            <option value="55">55</option>
                        </select>
                    </label>
                    <label className='dateTimeLabel'>
                        <select
                        value={endAmPm}
                        onChange={(e) => setEndAmPm(e.target.value)}
                        className='dateTimeInput'>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </label>
                </div>
                {
                    calendarEventID ?
                    <input type="submit" value="Save Edit" className='calendarSubmit' /> :
                    <input type="submit" value="Add Event" className='calendarSubmit' />
                }
            </form>
        </div>
    );
};

export default CalendarForm;