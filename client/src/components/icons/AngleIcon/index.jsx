import React from 'react';
import angleIcon from './angle.png';
import angleIconWhite from './angle-white.png';
import angleIconRed from './angle-red.png';
import angleIconBlue from './angle-blue.png';
import angleIconPurple from './angle-purple.png';

function AngleIcon(props) {
    const {user, iconClass} = props;
    const angleIconSrc = {
        Black: angleIcon,
        White: angleIconWhite,
        Red: angleIconRed,
        Blue: angleIconBlue,
        Purple: angleIconPurple
    };

    const findAngleIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return angleIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return angleIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return angleIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return angleIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return angleIconSrc['Purple'];
        }
    };

    return(
        <img src={ findAngleIconSrc() } alt="" className={ iconClass } />
    )
};

export default AngleIcon;