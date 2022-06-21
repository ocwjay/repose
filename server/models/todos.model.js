const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "To-do title is required"],
    },
}, { timestamps: true })

const ToDo = mongoose.model('ToDo', ToDoSchema);
module.exports = ToDo;