const { Prohairesis } = require('prohairesis');
const env = require('../env.js');
const db = require('../database');

module.exports = class Lists {
  constructor(title) {
    this.title = title;
  }

  static fetchLists() {
    return db.execute('SELECT * FROM lists');
  }

  static putList(list) {
    return db.execute('UPDATE lists SET title= ? WHERE id = ?', [list.title,list.id]);
  }

  static postList(list) {
    return db.execute('INSERT INTO lists SET title =?',[list.title]);
  }

  static deleteList(listId) {
    return db.execute('DELETE FROM lists WHERE id = ?', [listId]);
  }
};