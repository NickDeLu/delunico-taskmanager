const Tasks = require('../model/tasks');

exports.getTasks = async (req, res, next) => {
    try {
      const [getTasks] = await Tasks.fetchTasks(req.param('listId'));
      res.status(200).json(getTasks);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.postTask = async (req, res, next) => {
    try {
      const postResponse = await Tasks.postTask(req.body);
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.putTaskToggle = async (req, res, next) => {
    try {
      const postResponse = await Tasks.putTaskToggle(req.param('id'));
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.putTask = async (req, res, next) => {
    try {
      const postResponse = await Tasks.putTask(req.body);
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deleteTask = async (req, res, next) => {
    try {
      const deleteResponse = await Tasks.deleteTasks(req.param('id'));
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };