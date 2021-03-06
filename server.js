
///////////////////////////////////////////////
// Unit 2 Assessment
//////////////////////////////////////////////

// dependecies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// moongose connection
mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

const todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

// listen 
app.listen(3000, () => {
    console.log('listening');
});