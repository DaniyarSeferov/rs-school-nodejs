const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = async (user) => {
	const newUser = new User(user).data;
	await usersRepo.add(newUser);
	return newUser;
};

module.exports = { getAll, getById, create };
