const USERS = [];

const getAll = async () => USERS;

const getById = async (id) => {
	const users = await getAll();
	return users.find(user => user.id === id);
};

module.exports = { getAll, getById };
