import React, { useState } from 'react';
import './MenuWidgets.css';
import SettingsIcon from '../icons/SettingsIcon';
import WidgetsClosed from './WidgetsClosed';
import WidgetOpen from './WidgetOpen';

function MenuWidgets(props) {
    const {user, setUser} = props;
    const [openWidget, setOpenWidget] = useState('');

    return(
        <div className='menuWidgetsContainer'>
            {
                openWidget === '' ?
                <WidgetsClosed
                openWidget={openWidget}
                setOpenWidget={setOpenWidget}
                user={user} /> :
                <WidgetOpen
                openWidget={openWidget}
                setOpenWidget={setOpenWidget}
                user={user}
                setUser={setUser}
                />
            }
            <div onClick={(e) => setOpenWidget('settings')} className='settingsIconContainer'>
                <SettingsIcon user={user} iconClass='settingsIcon' />
            </div>
        </div>
    )
};

export default MenuWidgets;