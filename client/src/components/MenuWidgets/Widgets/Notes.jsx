import React, { useState } from 'react';
import NotebookIcon from '../../icons/NotebookIcon';
import './Notes.css';
import NotesDisplay from './NotesDisplay';
import NotesForm from './NotesForm';

function Notes(props) {
    const {user} = props;
    const [noteValue, setNoteValue] = useState('');
    const [noteID, setNoteID] = useState('');
    const [edit, setEdit] = useState(false);
    const [notes, setNotes] = useState([]);

    return(
        <div className='notesContainer'>
            <div className='notesHeader'>
                <NotebookIcon user={user} iconClass='noteHeaderIcon' />
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