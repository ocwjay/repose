const NotesController = require('../controllers/notes.controller');

module.exports = (app) => {
    app.get('/api/notes', NotesController.getNotes);
    app.get('/api/notes/:id', NotesController.getNoteById);
    app.post('/api/notes', NotesController.createNote);
    app.put('/api/notes/:id', NotesController.updateNote);
    app.delete('/api/notes/:id', NotesController.deleteNote);
}