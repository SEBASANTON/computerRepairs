const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'sebastianSA123',
    database: 'computerRepairs',
    logging:false
}); 

module.exports = {db}