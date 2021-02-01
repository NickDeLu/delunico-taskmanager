const { Prohairesis } = require('prohairesis');
const env = require('../env.js');
const db = require('../database');

module.exports = class Tasks {
  constructor(title, completed, listId) {
    this.title = title;
    this.completed = completed;
    this.listId = listId;
  }

  static fetchTasks(listId) {
    return db.execute('SELECT * FROM tasks WHERE listId = ?', [listId]);
  }

  static putTaskToggle(id) {
    return db.execute('UPDATE tasks SET completed= !completed WHERE id = ?', [id]);
  }

  static putTask(task) {
    return db.execute('UPDATE tasks SET title= ?, listId= ? WHERE id = ?', [task.title,task.listId,task.id]);
  }

  static postTask(task) {
    return db.execute('INSERT INTO tasks SET title =?, completed =?, listId =?', [task.title, task.completed, task.listId]);
  }

  static deleteTasks(taskId) {
    return db.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
  }
};