
const express = require('express');
const router = express.Router();
const Todo = require('../models/todos.js');

// routes
// Index
router.get('/', (req, res) => {
    Todo.find({}, (error, allTodos)=>{
        res.render('Index', {
            todos: allTodos
        });
    });
});

// create
router.post('/', (req, res) => {
    if (req.body.done === "on") {
        req.body.done = true;
    } else {
        req.body.done = false;
    }
    Todo.create(req.body, (error, createdTodo) => {
        res.redirect('/todos');
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        res.redirect('/todos');
    });
});

// export router
module.exports = router;