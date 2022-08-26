const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'jkohn',
        email: 'jkohn@gmail.com'

    },
    {
        username: 'Jake',
        password: 'jaker',
        email: 'jaker@gmail.com'
    },
    {
        username: 'Joe',
        password: 'joes',
        email: 'joes@gmail.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;