const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Set up routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });