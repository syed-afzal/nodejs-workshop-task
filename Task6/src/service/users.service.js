const repo = require('../reporsitories/users.repository');

async function findAll(options = {}) {
    return await repo.findAll(options);
}

async function find(searchBy = {}) {
    return await repo.find(searchBy);
}

async function findAllUsersWithPermissions() {
    return await repo.findAllUsersWithPermissions();
}

function findOne(name) {
    return repo.findOne(name);
}

async function insert(user, file) {
    if (file) {
        user.imageUrl = `/user/${file.filename}`
    }
    return await repo.insert(user)
}

async function assignPermissionToRole(data) {
    return await repo.assignPermissionToRole(data)
}

function update(user) {
    return repo.update(user);
}

function deleteById(id) {
    return repo.deleteById(id);
}

module.exports = {
    deleteById,
    findAll,
    find,
    findOne,
    insert,
    update,
    assignPermissionToRole,
    findAllUsersWithPermissions
};
