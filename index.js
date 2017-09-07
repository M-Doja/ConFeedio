const express  = require('express'),
      mongoose = require('mongoose'),
      cookieSession = require('cookie-session'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      port     = process.env.PORT || 5000,
      keys     = require('./config/keys'),
      app      = express();

require('./models/User');
require('./models/Surveys');
require('./services/passport');

// DATABASE CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect(keys.prodDB_URI, {
  useMongoClient: true
}, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log('Now connected to DB');
  db = db;
});

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days will auto expire
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up prodution assets
  // like mainj.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up index.html
  // if route is unrecognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
