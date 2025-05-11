const User = require("../models/User");

// Show login form
exports.getLogin = (req, res) => {
  res.render("auth/login", { session: req.session });
};

// Show signup form
exports.getSignup = (req, res) => {
  res.render("auth/register", { session: req.session });
};

// Handle signup form
exports.postSignup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id;
    res.redirect("/todos");
  } catch (err) {
    console.error(err);
    res.redirect("/register");
  }
};

// Handle login form
exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.redirect("/login");
    }
    req.session.userId = user._id;
    res.redirect("/todos");
  } catch (err) {
    console.error(err);
    res.redirect("/login");
  }
};

// Handle logout
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
