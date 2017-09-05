module.exports = {
  googleClientID : process.env.GOOGLE_CLIENT_ID,
  googleClientSECRET : process.env.GOOGLE_CLIENT_SECRET,
  prodDB_URI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirectURL: process.env.GOOGLE_REDIRECT_URL,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_T_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_T_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: "https://confeedio.herokuapp.com/"
}
