const express        = require('express'),
      passport       = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      keys           = require('./config/keys'),
      port           = process.env.PORT || 3000,
      app            = express();


passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    console.log(accessToken);
  })
);



app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
