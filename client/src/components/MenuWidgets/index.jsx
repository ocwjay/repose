import React, { useState } from 'react';
import './MenuWidgets.css';
import settingsIcon from './settings-sliders.png';
import WidgetsClosed from './WidgetsClosed';
import WidgetOpen from './WidgetOpen';

function MenuWidgets(props) {
    const {user, setUser} = props;
    const [openWidget, setOpenWidget] = useState('');

    return(
        <div className='menuWidgetsContainer'>
            {
                openWidget === '' ?
                <WidgetsClosed openWidget={openWidget} setOpenWidget={setOpenWidget} /> :
                <WidgetOpen
                openWidget={openWidget}
                setOpenWidget={setOpenWidget}
                user={user}
                setUser={setUser}
                />
            }
            <img src={ settingsIcon } alt="" className='settingsIcon' onClick={(e) => setOpenWidget('settings')} /> 
        </div>
    )
};

export default MenuWidgets;