
const mongoose = require('mongoose');

// create Schema
const todoSchema = new mongoose.Schema({
    todo: {type: String, required: true},
    done: {type: Boolean, default: false}
}, {timestamps: true});

// create model from our Schema
const Todo = mongoose.model('ToDo', todoSchema);

// export model
module.exports = Todo;