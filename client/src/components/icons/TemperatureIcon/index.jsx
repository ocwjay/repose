import React from 'react';
import temperatureIcon from './temperature-high.png';
import temperatureIconWhite from './temperature-high-white.png';
import temperatureIconRed from './temperature-high-red.png';
import temperatureIconBlue from './temperature-high-blue.png';
import temperatureIconPurple from './temperature-high-purple.png';

function TemperatureIcon(props) {
    const {user, iconClass} = props;
    const temperatureIconSrc = {
        Black: temperatureIcon,
        White: temperatureIconWhite,
        Red: temperatureIconRed,
        Blue: temperatureIconBlue,
        Purple: temperatureIconPurple
    };

    const findTemperatureIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return temperatureIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return temperatureIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return temperatureIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return temperatureIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return temperatureIconSrc['Purple'];
        }
    };

    return(
        <img src={ findTemperatureIconSrc() } alt="" className={ iconClass } />
    )
};

export default TemperatureIcon;