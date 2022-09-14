import React, { useState } from 'react';
import './MenuWidgets.css';
import CloseIcon from '../icons/CloseIcon';
import Notes from './Widgets/Notes';
import Weather from './Widgets/Weather';
import Horoscope from './Widgets/Horoscope';
import Settings from './Widgets/Settings';

function WidgetOpen(props) {
    const {openWidget, setOpenWidget, user, setUser} = props;

    return(
        <div className='openWidgetContainer' style={{ backgroundColor: user.settings?.lightDarkMode }}>
            <div onClick={(e) => setOpenWidget('')}>
                <CloseIcon user={user} iconClass='closeWidgetIcon' />
            </div>
            {
                openWidget === 'notes' ?
                <Notes user={user} /> : ''
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