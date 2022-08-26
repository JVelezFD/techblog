const withAuth = (req, res, next) => {
  //redirect if not logged in
  if(!req.session.user_id) {
      res.redirect('/login');
  } else {
      next();
  }
};

module.exports = withAuth;
