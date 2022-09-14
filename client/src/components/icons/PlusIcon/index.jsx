import React from 'react';
import plusIcon from './plus.png';
import plusIconWhite from './plus-white.png';
import plusIconRed from './plus-red.png';
import plusIconBlue from './plus-blue.png';
import plusIconPurple from './plus-purple.png';

function PlusIcon(props) {
    const {user, iconClass} = props;
    const plusIconSrc = {
        Black: plusIcon,
        White: plusIconWhite,
        Red: plusIconRed,
        Blue: plusIconBlue,
        Purple: plusIconPurple
    };

    const findPlusIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return plusIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return plusIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return plusIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return plusIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return plusIconSrc['Purple'];
        }
    };

    return(
        <img src={ findPlusIconSrc() } alt="" className={ iconClass } />
    )
};

export default PlusIcon;