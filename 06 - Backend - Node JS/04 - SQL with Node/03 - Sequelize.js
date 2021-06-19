// sequelize là package giúp connect, query tới database mà không cần viết SQL
// tự sequelize sẽ viết code SQL behind the scene
const Sequelize = require('sequelize') 

const sequelize = new Sequelize('node_app', 'root', 'Sq8210$$$$', {
    dialect: 'mysql', host: 'localhost',
})

module.exports = sequelize