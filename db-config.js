const knex = require('knex');
console.log("in db config");
const config = require('./knexfile.js');

module.exports = knex(config.development);