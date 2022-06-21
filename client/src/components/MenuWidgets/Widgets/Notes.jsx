import React, { useState } from 'react';
import './Notes.css';
import NotesDisplay from './NotesDisplay';
import NotesForm from './NotesForm';
import notebookIcon from '../notebook.png';

function Notes(props) {
    const [noteValue, setNoteValue] = useState('');
    const [noteID, setNoteID] = useState('');
    const [edit, setEdit] = useState(false);
    const [notes, setNotes] = useState([]);

    return(
        <div className='notesContainer'>
            <div className='notesHeader'>
                <img src={notebookIcon} alt="" className='noteHeaderIcon' />
                <h2>Notes</h2>
            </div>
            <NotesForm
                noteValue={noteValue}
                setNoteValue={setNoteValue}
                noteID={noteID}
                setNoteID={setNoteID}
                setEdit={setEdit}
                edit={edit}
                setNotes={setNotes}
                />
            <NotesDisplay
                setNoteValue={setNoteValue}
                setNoteID={setNoteID}
                setEdit={setEdit}
                notes={notes}
                setNotes={setNotes}
                />
        </div>
    )
};

export default Notes;