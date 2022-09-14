import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToDoGlance.css';

function ToDoForm(props) {
    const {todoID, setView, user} = props;
    const [title, setTitle] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/todos/${todoID}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
        }, [todoID]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(todoID){
            console.log(`Title is ${title}`);
            axios.put(`http://localhost:8000/api/todos/${todoID}`, {
                title
            })
                .then( res => {
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        } else {
        console.log(`Title is ${title}`);
            axios.post('http://localhost:8000/api/todos/', {
                title
            })
                .then( res => {
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        setTitle('');
        setView('list');
    };

    console.log('how many times does this component render?')

    return(
        <div>
            <form className='toDoForm' onSubmit={submitHandler}>
                <label className='toDoLabel'>
                    To Do:
                    <input type="text" className='toDoInput' value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                {
                    todoID ?
                    <input type="submit" value="Save Edit" className='toDoSubmit' /> :
                    <input type="submit" value="Add To Do" className='toDoSubmit' />
                }
            </form>
        </div>
    );
};

export default ToDoForm;