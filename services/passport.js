const passport       = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      keys           = require('../config/keys');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile ,done) => {
    console.log("accessToken: " + accessToken);
    console.log("refreshToken: " + refreshToken);
    console.log("profile: " + profile);
  })
);
