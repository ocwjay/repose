import React, { useState } from 'react';
import './MenuWidgets.css';
import settingsIcon from './settings-sliders.png';
import WidgetsClosed from './WidgetsClosed';
import WidgetOpen from './WidgetOpen';

function MenuWidgets() {
    const [openWidget, setOpenWidget] = useState('');

    return(
        <div className='menuWidgetsContainer'>
            {
                openWidget === '' ?
                <WidgetsClosed openWidget={openWidget} setOpenWidget={setOpenWidget} /> :
                <WidgetOpen openWidget={openWidget} setOpenWidget={setOpenWidget} />
            }
            <img src={ settingsIcon } alt="" className='settingsIcon' />
        </div>
    )
};

export default MenuWidgets;