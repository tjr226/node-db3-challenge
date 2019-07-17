const db = require('../db-config.js');
console.log("in scheme model");
module.exports = {
    find,
    findById,
    // findSteps,
    // add,
    // update,
    // remove
}

// resolves to an array of schemes
function find() {
    console.log("in find");
    return db('schemes');
}

// resolves to a single scheme (or null)
function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}