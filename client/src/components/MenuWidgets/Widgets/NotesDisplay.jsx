import React, { useState, useEffect } from 'react';
import './Notes.css';
import editIcon from './edit.png';
import deleteIcon from './cross.png';
import axios from 'axios';


function NotesDisplay(props) {
    const {setNoteValue, setNoteID, setEdit, notes, setNotes} = props;
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/notes')
            .then((res) => {
                console.log(res.data);
                setNotes(res.data);
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
    }, []);

    const removeFromDom = noteID => {
        setNotes(notes.filter(note => note._id != noteID));
    };

    function deleteHandler(noteID) {
        axios.delete(`http://localhost:8000/api/notes/${noteID}`)
            .then((res) => {
                removeFromDom(noteID);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function editHandler(noteID) {
        axios.get(`http://localhost:8000/api/notes/${noteID}`)
            .then((res) => {
                setNoteValue(res.data.note);
                setNoteID(noteID);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className='notesDisplayContainer'>
            {
                notes.map((note) => (
                    <div key={note._id} className='noteEntry'>
                        <p className='noteBody'>
                            { note.note }
                        </p>
                        <div className='iconContainer'>
                            <img src={ editIcon } alt="" onClick={ (e) => {
                                editHandler(note._id);
                                setEdit(true);
                            } } className='noteIcon' />
                            <img src={ deleteIcon } alt="" onClick={ (e) => deleteHandler(note._id) } className='noteIcon' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default NotesDisplay;