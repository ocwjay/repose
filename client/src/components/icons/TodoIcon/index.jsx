import React from 'react';
import todoIcon from './list-check.png';
import todoIconWhite from './list-check-white.png';
import todoIconRed from './list-check-red.png';
import todoIconBlue from './list-check-blue.png';
import todoIconPurple from './list-check-purple.png';

function TodoIcon(props) {
    const {user} = props;
    const todoIconSrc = {
        Black: todoIcon,
        White: todoIconWhite,
        Red: todoIconRed,
        Blue: todoIconBlue,
        Purple: todoIconPurple
    };

    const findTodoIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return todoIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return todoIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return todoIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return todoIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return todoIconSrc['Purple'];
        }
    };

    return(
        <img src={ findTodoIconSrc() } alt="" className='todoListIcon' />
    )
};

export default TodoIcon;