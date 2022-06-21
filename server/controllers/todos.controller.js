const ToDo = require('../models/todos.model');

module.exports = {
    getToDos: (req, res) => {
        ToDo.find({})
            .then((todos) => {
                res.json(todos);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getToDos", error: err });
            });
    },
    createToDo: (req, res) => {
        ToDo.create(req.body)
            .then(newToDo => {
                res.status(201).json(newToDo);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in createToDo", error: err });
            });
    },
    getToDoById: (req, res) => {
        ToDo.findOne({ _id: req.params.id })
            .then(todo => {
                res.json(todo);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in findById", error: err });
            });
    },
    deleteToDo: (req, res) => {
        ToDo.deleteOne({ _id: req.params.id })
            .then(todo => {
                res.json(todo);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in deleteToDo", error: err });
            });
    },
    updateToDo: (req, res) => {
        ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
            .then(todo => {
                res.json(todo);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in updateToDo", error: err });
            });
    },
};