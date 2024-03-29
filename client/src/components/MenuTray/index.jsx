import React, { useState } from 'react';
import './MenuTray.css';
import MenuWidgets from '../MenuWidgets';
import AngleIcon from '../icons/AngleIcon';

function MenuTray(props) {
    const {user, setUser} = props;
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState('3vw');
    const [padding, setPadding] = useState('0%');
    const [rotate, setRotate] = useState('rotate(0deg)');

    const menuWidth = () => {
        if(open === false) {
            setWidth('69vw');
            setPadding('1vw');
            setRotate('rotate(180deg)');
            setOpen(true);
        } else {
            setWidth('3vw');
            setPadding('0vw');
            setRotate('rotate(0deg)');
            setOpen(false);
        }
    }

    return(
        <div id='menuTray' style={{ width: width, padding: padding, backgroundColor: user.settings?.theme }}>
            <div onClick={ menuWidth } className='menuBtn' style={{ transform: rotate }}>
                <AngleIcon user={user} iconClass='menuBtn' />
            </div>
            {
                open ?
                <MenuWidgets user={user} setUser={setUser} /> :
                ''
            }
            
        </div>
    );
};

export default MenuTray;