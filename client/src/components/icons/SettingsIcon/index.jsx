import React from 'react';
import settingsIcon from './settings-sliders.png';
import settingsIconWhite from './settings-sliders-white.png';
import settingsIconRed from './settings-sliders-red.png';
import settingsIconBlue from './settings-sliders-blue.png';
import settingsIconPurple from './settings-sliders-rebeccapurple.png';

function SettingsIcon(props) {
    const {user, iconClass} = props;
    const settingsIconSrc = {
        Black: settingsIcon,
        White: settingsIconWhite,
        Red: settingsIconRed,
        Blue: settingsIconBlue,
        Purple: settingsIconPurple
    };

    const findSettingsIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return settingsIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return settingsIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return settingsIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return settingsIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return settingsIconSrc['Purple'];
        }
    };
    

    return(
        <img src={ findSettingsIconSrc() } alt="" className={ iconClass } /> 
    )
};

export default SettingsIcon;