const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// Database Connection
mongoose.connect('mongodb://localhost/musicArtistManager', { useNewUrlParser: true, useUnifiedTopology: true });

// Passport Config
require('./config/passport')(passport);

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Static Folder
app.use(express.static('public'));

// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
