const express = require('express');

const taskController = require('../controllers/taskcontroller');

const router = express.Router();

router.get('/:listId', taskController.getTasks);

router.post('/', taskController.postTask);

router.put('/:id', taskController.putTaskToggle);

router.put('/', taskController.putTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;