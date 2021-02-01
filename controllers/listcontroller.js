const Lists = require('../model/lists');

exports.getLists = async (req, res, next) => {
    try {
      const [getLists] = await Lists.fetchLists();
      res.status(200).json(getLists);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.postList = async (req, res, next) => {
    try {
      const postResponse = await Lists.postList(req.body);
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.putList = async (req, res, next) => {
    try {
      const postResponse = await Lists.putList(req.body);
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deleteList = async (req, res, next) => {
    try {
      const deleteResponse = await Lists.deleteList(req.param('id'));
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };