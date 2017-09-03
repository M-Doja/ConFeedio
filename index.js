const express  = require('express'),
      mongoose = require('mongoose'),
      cookieSession = require('cookie-session'),
      passport = require('passport'),
      port     = process.env.PORT || 5000,
      keys     = require('./config/keys'),
      app      = express();

require('./models/User');
require('./services/passport');

// DATABASE CONNECTION
// mongoose.Promise = global.Promise;
mongoose.connect(keys.prodDB_URI, {
  useMongoClient: true
}, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log('Now connected to DB');
  db = db;
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days will auto expire
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
