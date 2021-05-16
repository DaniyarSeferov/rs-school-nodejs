const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = async (user) => {
	const newUser = new User(user).data;
	await usersRepo.add(newUser);
	return newUser;
};

const update = (id, user) => usersRepo.update(id, user);

const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getById, create, update, deleteUser };
