const ToDoController = require('../controllers/todos.controller');

module.exports = (app) => {
    app.get('/api/todos', ToDoController.getToDos);
    app.get('/api/todos/:id', ToDoController.getToDoById);
    app.post('/api/todos', ToDoController.createToDo);
    app.put('/api/todos/:id', ToDoController.updateToDo);
    app.delete('/api/todos/:id', ToDoController.deleteToDo);
}