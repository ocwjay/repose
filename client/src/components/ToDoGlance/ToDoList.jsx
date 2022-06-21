import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToDoGlance.css';
import deleteIcon from './cross.png';
import editIcon from './edit.png';

function ToDoList(props) {
    const [todos, setTodos] = useState([]);
    const {setView, setTodoID} = props;

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

//YOU JUST NEED TO FIGURE OUT THE ADD NOW. AFTER THAT, EDIT WILL BE EASY
    return(
        <div>
            {
                todos.map((todo) => (
                    <div key={todo._id} className='toDoEntry'>
                        <p className='toDoTitle'>
                            { todo.title }
                        </p>
                        <div className='toDoIconContainer'>
                            <img src={ editIcon } alt="" onClick={ (e) => {
                                setTodoID(todo._id);
                                setView('form');
                            } } className='todoIcon' />
                            <img src={ deleteIcon } alt="" onClick={ (e) => deleteHandler(todo._id) } className='todoIcon' />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ToDoList;