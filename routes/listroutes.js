const express = require('express');

const listController = require('../controllers/listcontroller');

const router = express.Router();

router.get('/', listController.getLists);

router.post('/', listController.postList);

router.put('/', listController.putList);

router.delete('/:id', listController.deleteList);

module.exports = router;