const bcrypt = require('bcrypt');
const users = []; // Temporary storage; replace with a database in production

exports.getLogin = (req, res) => {
  res.render('login.ejs');
};
