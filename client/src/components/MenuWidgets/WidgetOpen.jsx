import React, { useState } from 'react';
import './MenuWidgets.css';
import closeIcon from './cross.png';
import Notes from './Widgets/Notes';
import Weather from './Widgets/Weather';
import Horoscope from './Widgets/Horoscope';
import Settings from './Widgets/Settings';

function WidgetOpen(props) {
    const {openWidget, setOpenWidget, user, setUser} = props;

    return(
        <div className='openWidgetContainer'>
            <img src={closeIcon} alt="" onClick={(e) => setOpenWidget('')} className="closeWidgetIcon" />
            {
                openWidget === 'notes' ?
                <Notes /> : ''
            }
            {
                openWidget === 'weather' ?
                <Weather /> : ''
            }
            {
                openWidget === 'horoscope' ?
                <Horoscope /> : ''
            }
            {
                openWidget === 'settings' ?
                <Settings user={user} setUser={setUser} /> : ''
            }
        </div>
    )
};

export default WidgetOpen;