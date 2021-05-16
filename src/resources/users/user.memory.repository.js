const USERS = [];

const getAll = async () => USERS;

const getById = async (id) => {
	const users = await getAll();
	return users.find(user => user.id === id);
};

const add = async (user) => {
	USERS.push(user);
};

const update = async (id, data) => {
	const index = USERS.findIndex(user => user.id === id);

	if (USERS[index]) {
		USERS[index] = { ...USERS[index], ...data};
	}
	return USERS[index] || null;
};

module.exports = { getAll, getById, add, update };
