import React, { useState } from 'react';
import './MenuWidgets.css';
import notebookIcon from './notebook.png';
import horoscopeIcon from './sparkles.png';
import weatherIcon from './cloud-sun.png';

function WidgetsClosed(props) {
    const {openWidget, setOpenWidget} = props;

    return(
        <div className='menuWidgetsContainer'>
            <div className='col'>
                <div className='widget notesWidget' onClick={(e) => {
                    if(openWidget === 'notes') {
                        setOpenWidget('');
                    } else {
                        setOpenWidget('notes');
                    }
                }}>
                    <img src={notebookIcon} alt="" className='notebookIcon' />
                    <h2>Notes</h2>
                </div>
                <div className='widget weatherWidget' onClick={(e) => {
                    if(openWidget === 'weather') {
                        setOpenWidget('');
                    } else {
                        setOpenWidget('weather');
                    }
                }}>
                    <img src={weatherIcon} alt="" className='weatherIcon' />
                    <h2>Weather</h2>
                </div>
                <div className='widget comingSoon'>
                    <h2>Coming Soon!</h2>
                </div>
                {/* <div className='widget'>Widget</div> */}
            </div>
            <div className='col'>
            <div className='widget horoscopeWidget' onClick={(e) => {
                    if(openWidget === 'horoscope') {
                        setOpenWidget('');
                    } else {
                        setOpenWidget('horoscope');
                    }
                }}>
                    <img src={horoscopeIcon} alt="" className='horoscopeIcon' />
                    <h2>Horoscope</h2>
                </div>
                <div className='widget comingSoon'>
                    <h2>Coming Soon!</h2>
                </div>
                <div className='widget comingSoon'>
                    <h2>Coming Soon!</h2>
                </div>
                <div className='widget comingSoon'>
                    <h2>Coming Soon!</h2>
                </div>
            </div>
        </div>
    );
};

export default WidgetsClosed;