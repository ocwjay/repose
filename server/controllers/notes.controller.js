const Note = require('../models/notes.model');

module.exports = {
    getNotes: (req, res) => {
        Note.find({})
            .then((notes) => {
                res.json(notes);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getNotes", error: err });
            });
    },
    createNote: (req, res) => {
        Note.create(req.body)
            .then(newNote => {
                res.status(201).json(newNote);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in createNote", error: err });
            });
    },
    getNoteById: (req, res) => {
        Note.findOne({ _id: req.params.id })
            .then(note => {
                res.json(note);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getNoteById", error: err });
            });
    },
    deleteNote: (req, res) => {
        Note.deleteOne({ _id: req.params.id })
            .then(note => {
                res.json(note);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in deleteNote", error: err });
            });
    },
    updateNote: (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
            .then(note => {
                res.json(note);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in updateNote", error: err });
            });
    },
};