import React, { useState } from 'react';
import './Notes.css';
import axios from 'axios';


function NotesForm(props) {
    const {noteID, setNoteID, noteValue, setNoteValue, edit, setEdit, setNotes} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        if(noteID){
            console.log(`Note is ${noteValue}`);
            axios.put(`http://localhost:8000/api/notes/${noteID}`, {
                note: noteValue
            })
                .then( res => {
                    console.log(res);
                    axios.get('http://localhost:8000/api/notes')
                        .then((res) => {
                            console.log(res.data);
                            setNotes(res.data);
                        })
                        .catch((err) => {
                            console.log('ERROR', err);
                        });
                })
                .catch((err)=>{
                    console.log(err);
                })
        } else {
        console.log(`Note is ${noteValue}`);
            axios.post('http://localhost:8000/api/notes/', {
                note : noteValue
            })
                .then( res => {
                    console.log(res);
                    axios.get('http://localhost:8000/api/notes')
                        .then((res) => {
                            console.log(res.data);
                            setNotes(res.data);
                        })
                        .catch((err) => {
                            console.log('ERROR', err);
                        });
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        setNoteValue('');
        setNoteID('');
        if(edit) {
            setEdit(false)
        }
    }

    return(
        <div className='notesFormContainer'>
            <form onSubmit={submitHandler} className="notesForm">
                <label className='notesLabel'>
                    <textarea className='notesTextArea' value={noteValue} onChange={ (e) => setNoteValue(e.target.value) }></textarea>
                </label>
                {
                    edit ?
                    <div className='notesButtonContainer'>
                        <button className='notesCancelButton' onClick={(e) => {
                            setNoteID('');
                            setNoteValue('');
                            setEdit(false);
                        }}>Cancel Edit</button>
                        <input type="submit" value="Save Edited Note" className='addNoteBtn' />
                    </div> :
                    <input type="submit" value="Save Note" className='addNoteBtn' />
                }
            </form>
        </div>
    )
};

export default NotesForm;