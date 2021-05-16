const USERS = [];

const getAll = async () => USERS;

const getById = async (id) => {
	const users = await getAll();
	return users.find(user => user.id === id);
};

const add = async (user) => {
	USERS.push(user);
};

module.exports = { getAll, getById, add };
