const router = require('express').Router();
const userRoutes = require('./userroute');
const postRoutes = require('./postroute');
const commentRoutes = require('./commentroute');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;