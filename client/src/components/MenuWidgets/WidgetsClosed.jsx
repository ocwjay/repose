import React, { useReducer, useState } from 'react';
import './MenuWidgets.css';
import TemperatureIcon from '../icons/TemperatureIcon';
import NotebookIcon from '../icons/NotebookIcon';
import SparklesIcon from '../icons/SparklesIcon';

function WidgetsClosed(props) {
    const {openWidget, setOpenWidget, user} = props;

    return(
        <div className='menuWidgetsContainer'>
            <div className='col'>
                <div className='widget notesWidget'
                style={{ backgroundColor: user.settings?.lightDarkMode }}
                onClick={(e) => {
                    if(openWidget === 'notes') {
                        setOpenWidget('');
                    } else {
                        setOpenWidget('notes');
                    }
                }}>
                    <NotebookIcon user={user} iconClass='notebookIcon' />
                    <h2>Notes</h2>
                </div>
                <div className='widget weatherWidget'
                style={{ backgroundColor: user.settings?.lightDarkMode }}
                onClick={(e) => {
                    if(openWidget === 'weather') {
                        setOpenWidget('');
                    } else {
                        setOpenWidget('weather');
                    }
                }}>
                    <TemperatureIcon user={user} iconClass='weatherIcon' />
                    <h2>Weather</h2>
                </div>
                <div className='widget comingSoon'
                style={{ backgroundColor: user.settings?.lightDarkMode }}>
                    <h2>Coming Soon!</h2>
                </div>
                {/* <div className='widget'>Widget</div> */}
            </div>
            <div className='col'>
            <div className='widget horoscopeWidget'
            style={{ backgroundColor: user.settings?.lightDarkMode }}
            onClick={(e) => {
                    if(openWidget === 'horoscope') {
                        setOpenWidget('');
                    } else {
                        setOpenWidget('horoscope');
                    }
                }}>
                    <SparklesIcon user={user} iconClass='horoscopeIcon' />
                    <h2>Horoscope</h2>
                </div>
                <div className='widget comingSoon'
                style={{ backgroundColor: user.settings?.lightDarkMode }}>
                    <h2>Coming Soon!</h2>
                </div>
                <div className='widget comingSoon'
                style={{ backgroundColor: user.settings?.lightDarkMode }}>
                    <h2>Coming Soon!</h2>
                </div>
                <div className='widget comingSoon'
                style={{ backgroundColor: user.settings?.lightDarkMode }}>
                    <h2>Coming Soon!</h2>
                </div>
            </div>
        </div>
    );
};

export default WidgetsClosed;