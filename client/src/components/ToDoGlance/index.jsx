import React, { useState } from 'react';
import './ToDoGlance.css';
import addIcon from './plus.png';
import closeIcon from './cross.png';
import todoIcon from './list-check.png';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function ToDoGlance() {
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
        <div  className='mainWidgets toDoGlance'>
            <div className='toDoHeader'>
                <img src={todoIcon} alt="" className='todoListIcon' />
                <h2>To Do List</h2>
            </div>
            <div className='toDoContainer'>
                {
                    view === 'list' ? 
                    <ToDoList setView={setView} setTodoID={setTodoID} /> :
                    <ToDoForm todoID={todoID} setView={setView} setTodoID={setTodoID} />
                }
            </div>
            {
                view === 'list' ?
                <img src={ addIcon } alt="" className='addIcon' onClick={ viewHandler } /> :
                <img src={ closeIcon } alt="" className='closeIcon' onClick={ viewHandler } /> 
            }
            
        </div>
    );
};

export default ToDoGlance;