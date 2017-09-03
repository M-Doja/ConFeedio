const keys = require('../config/keys'),
      stripe = require('stripe')(keys.stripeSecretKey),
      isLoggedIn = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', isLoggedIn, (req, res) => {
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    }, (err, charge) => {
      req.user.credits += 5;
      req.user.save();
    });
    res.send(req.user);
  });
};
