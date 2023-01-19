const express = require('express')
const router = express.Router()
const todosController = require('../controllers/home')


router.get('/', todosController.getTodos)

router.post('/addTask', todosController.addTask)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteItem', todosController.deleteItem)

module.exports = router;