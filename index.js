const express  = require('express'),
      mongoose = require('mongoose'),
      port     = process.env.PORT || 3000,
      keys     = require('./config/keys'),
      app      = express();


// DATABASE CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect(keys.testDB_URI, {
  useMongoClient: true
}, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log('Now connected to DB');
  db = db;
});

require('./services/passport');
require('./routes/authRoutes')(app);


app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
