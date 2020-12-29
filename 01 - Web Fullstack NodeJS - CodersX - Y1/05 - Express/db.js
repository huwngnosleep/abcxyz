
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const { debug } = require('console')
const adapter = new FileSync('db.json')

db = low(adapter)
db.defaults({users: []})
  .write();

module.exports = db;
