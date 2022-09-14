import React from 'react';
import closeIcon from './cross.png';
import closeIconWhite from './cross-white.png';
import closeIconRed from './cross-red.png';
import closeIconBlue from './cross-blue.png';
import closeIconPurple from './cross-purple.png';

function CloseIcon(props) {
    const {user, iconClass} = props;
    const closeIconSrc = {
        Black: closeIcon,
        White: closeIconWhite,
        Red: closeIconRed,
        Blue: closeIconBlue,
        Purple: closeIconPurple
    };

    const findCloseIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return closeIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return closeIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return closeIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return closeIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return closeIconSrc['Purple'];
        }
    };

    return(
        <img src={ findCloseIconSrc() } alt="" className={iconClass} /> 
    )
};

export default CloseIcon;