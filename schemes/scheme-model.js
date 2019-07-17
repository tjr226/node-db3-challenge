const db = require('../db-config.js');
console.log("in scheme model");
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
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

// expects a scheme ID
function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where('schemes.id', id)
        .orderBy('steps.step_number')
}

// returns the object just added to DB
function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(schemes => {
            return findById(schemes[0]);
        })
}

// update
function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}


// remove
function remove(id) {
    return db('schemes')
        .where('id', id)
        .del();
}