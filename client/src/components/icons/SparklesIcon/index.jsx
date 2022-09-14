import React from 'react';
import sparklesIcon from './sparkles.png';
import sparklesIconWhite from './sparkles-white.png';
import sparklesIconRed from './sparkles-red.png';
import sparklesIconBlue from './sparkles-blue.png';
import sparklesIconPurple from './sparkles-purple.png';

function SparklesIcon(props) {
    const {user, iconClass} = props;
    const sparklesIconSrc = {
        Black: sparklesIcon,
        White: sparklesIconWhite,
        Red: sparklesIconRed,
        Blue: sparklesIconBlue,
        Purple: sparklesIconPurple
    };

    const findSparklesIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return sparklesIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return sparklesIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return sparklesIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return sparklesIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return sparklesIconSrc['Purple'];
        }
    };

    return(
        <img src={ findSparklesIconSrc() } alt="" className={ iconClass } />
    )
};

export default SparklesIcon;