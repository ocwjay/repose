import React, { useState } from 'react';
import './ToDoGlance.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import TodoIcon from '../icons/TodoIcon';
import PlusIcon from '../icons/PlusIcon';
import CloseIcon from '../icons/CloseIcon';

function ToDoGlance(props) {
    const {user} = props;
    const [view, setView] = useState('list');
    const [todoID, setTodoID] = useState('');

    const viewHandler = () => {
        if(view === 'list') {
            setView('form');
        } else {
            setView('list');
            setTodoID('');
        }
    }

    return(
        <div className='mainWidgets toDoGlance' style={{ backgroundColor: user.settings?.lightDarkMode }}>
            <div className='toDoHeader'>
                <TodoIcon user={user} />
                <h2>To Do List</h2>
            </div>
            <div className='toDoContainer'>
                {
                    view === 'list' ? 
                    <ToDoList setView={setView} setTodoID={setTodoID} user={user} /> :
                    <ToDoForm todoID={todoID} setView={setView} setTodoID={setTodoID} user={user} />
                }
            </div>
            {
                view === 'list' ?
                <div className='plusIconContainer' onClick={ viewHandler }>
                    <PlusIcon iconClass='plusIcon' user={user} /> 
                </div>:
                <div className='closeIconContainer' onClick={ viewHandler }>
                    <CloseIcon iconClass='closeIcon' user={user} />
                </div>
            }
        </div>
    );
};

export default ToDoGlance;