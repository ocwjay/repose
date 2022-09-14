import React from 'react';
import editIcon from './edit.png';
import editIconWhite from './edit-white.png';
import editIconRed from './edit-red.png';
import editIconBlue from './edit-blue.png';
import editIconPurple from './edit-purple.png';

function EditIcon(props) {
    const {user, iconClass} = props;
    const editIconSrc = {
        Black: editIcon,
        White: editIconWhite,
        Red: editIconRed,
        Blue: editIconBlue,
        Purple: editIconPurple
    };

    const findEditIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return editIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return editIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return editIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return editIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return editIconSrc['Purple'];
        }
    };

    return(
        <img src={ findEditIconSrc() } alt="" className={ iconClass } />
    )
};

export default EditIcon;