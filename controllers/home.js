const Todo = require('../models/Todo')

module.exports = {
	getTodos: async (req,res) => {
		try {
			const todoItems = await Todo.find()
			res.render('index.ejs', {todos: todoItems})
		} catch(err) {
			console.error(err)
		}
	},
	addTask: async (req,res) => {
		try {
			await Todo.create({todo: req.body.task, completed: false})
			console.log('Todo Added')
			res.redirect('/')
		} catch (err) {
			console.error(err)
		}
	},
	markComplete: async (req, res) => {
		try {
			await Todo.findOneAndUpdate({_id: req.body.itemFromJS, completed: true})
			console.log('Marked Complete')
			res.json('Marked complete')
		} catch (err) {
			console.error(err)
		}
	},
	markIncomplete: async (req, res) => {
		try {
			await Todo.findOneAndUpdate({_id: req.body.itemFromJS, completed: false})
			console.log('Marked Complete')
			res.json('Marked complete')
		} catch (err) {
			console.error(err)
		}
	},
	deleteItem: async (req, res) => {
		try {
			await Todo.findOneAndDelete({_id: req.body.itemFromJS})
			console.log('DELETED')
			res.json('Deleted')

		} catch (err) {
			console.error(err)
		}
	}
}