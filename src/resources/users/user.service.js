const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = () => usersRepo.getById();

module.exports = { getAll, getById };
