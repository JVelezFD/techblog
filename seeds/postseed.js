const { Post } = require('../models');

const postData = [{
        title: 'Test I',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Test II',
        content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 2
    },
   
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;