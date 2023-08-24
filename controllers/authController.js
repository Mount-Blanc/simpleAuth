const bcrypt = require('bcrypt');
const users = []; // Temporary storage; replace with a database in production

exports.getLogin = (req, res) => {
  res.render('login.ejs');
};

exports.getDash = (req,res) => {
  res.render('dash.ejs')
}

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = user;
    res.redirect('/auth/dashboard'); // Redirect to a protected route
  } else {
    res.redirect('/auth/login');
  }
};

exports.getRegister = (req, res) => {
  res.render('register.ejs');
};

exports.postRegister = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword });

  res.redirect('/auth/login');
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  });
};
