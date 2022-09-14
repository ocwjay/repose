import React from 'react';
import notebookIcon from './notebook.png';
import notebookIconWhite from './notebook-white.png';
import notebookIconRed from './notebook-red.png';
import notebookIconBlue from './notebook-blue.png';
import notebookIconPurple from './notebook-purple.png';

function NotebookIcon(props) {
    const {user, iconClass} = props;
    const notebookIconSrc = {
        Black: notebookIcon,
        White: notebookIconWhite,
        Red: notebookIconRed,
        Blue: notebookIconBlue,
        Purple: notebookIconPurple
    };

    const findNotebookIconSrc = () => {
        if(user.settings?.textColor === '#000000') {
            return notebookIconSrc['Black'];
        }
        if(user.settings?.textColor === '#ffffff') {
            return notebookIconSrc['White'];
        }
        if(user.settings?.textColor === '#ff0000') {
            return notebookIconSrc['Red'];
        }
        if(user.settings?.textColor === '#0066ff') {
            return notebookIconSrc['Blue'];
        }
        if(user.settings?.textColor === '#663399') {
            return notebookIconSrc['Purple'];
        }
    };

    return(
        <img src={ findNotebookIconSrc() } alt="" className={ iconClass } />
    )
};

export default NotebookIcon;