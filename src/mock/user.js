const { v4: uuid } = require('uuid');

const generateName = (uid) => `USER-${uid.toUpperCase()}`;

const generateLogin = (uid) => `user-${uid}`;

const generatePassword = () => `P@55w0rd`;

const generateUser = () => {
	const uid = uuid();

	return {
		id: uid,
		name: generateName(uid),
		login: generateLogin(uid),
		password: generatePassword(),
	};
};

module.exports = { generateUser };