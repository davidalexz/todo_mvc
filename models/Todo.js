const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
}, { collection: 'todos_mvc'})

module.exports = mongoose.model('Todo', TodoSchema)