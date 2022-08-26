const { Comment } = require('../models');

const commentData = [{
        comment_text: " Test Lorem ipsum dolor sit amet",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Testing consectetur adipiscing elit",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: " Tester sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;