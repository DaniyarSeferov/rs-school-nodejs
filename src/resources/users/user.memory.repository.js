const userMock = require('../../mock/user');

const USER_COUNT = 10;

const getAll = async () => new Array(USER_COUNT).fill().map(userMock.generateUser);

module.exports = { getAll };
