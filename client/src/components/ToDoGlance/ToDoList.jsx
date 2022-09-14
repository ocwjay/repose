import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToDoGlance.css';
import CloseIcon from '../icons/CloseIcon';
import EditIcon from '../icons/EditIcon';

function ToDoList(props) {
    const [todos, setTodos] = useState([]);
    const {setView, setTodoID, user} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/todos')
            .then((res) => {
                console.log(res.data);
                setTodos(res.data);
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
    }, []);

    const removeFromDom = todoID => {
        setTodos(todos.filter(todo => todo._id !== todoID));
    };

    function deleteHandler(todoID) {
        axios.delete(`http://localhost:8000/api/todos/${todoID}`)
            .then((res) => {
                removeFromDom(todoID);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div>
            {
                todos.map((todo) => (
                    <div key={todo._id} className='toDoEntry' style={{ borderBottom: `solid 1px ${user.settings?.textColor}` }}>
                        <p className='toDoTitle'>
                            { todo.title }
                        </p>
                        <div className='toDoIconContainer'>
                            <div onClick={ (e) => {
                                setTodoID(todo._id);
                                setView('form');
                            } }>
                                <EditIcon user={user} iconClass='todoIcon' />
                            </div>
                            <div onClick={ (e) => deleteHandler(todo._id) }>
                                <CloseIcon user={user} iconClass='todoIcon' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ToDoList;