const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'jkohn',
        

    },
    {
        username: 'Jake',
        password: 'jaker',
       
    },
    {
        username: 'Joe',
        password: 'joes',
        
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;