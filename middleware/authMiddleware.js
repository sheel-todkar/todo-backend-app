exports.checkAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  res.redirect("/login");
};

exports.checkNotAuthenticated = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return next();
  }
  res.redirect("/todos");
};
