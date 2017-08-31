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
  }, (accessToken, refreshToken, profile ,done) => {
    console.log("accessToken : " + accessToken);
    console.log("refreshToken : " + refreshToken);
    console.log("profile : " + profile);
  })
);

app.get('/auth/google/', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'))


app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
