import React, { useState } from 'react';
import './MenuWidgets.css';
import closeIcon from './cross.png';
import Notes from './Widgets/Notes';
import Weather from './Widgets/Weather';
import Horoscope from './Widgets/Horoscope';

function WidgetOpen(props) {
    const {openWidget, setOpenWidget} = props;

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
        </div>
    )
};

export default WidgetOpen;