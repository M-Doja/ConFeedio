const mongoose = require('mongoose');
const isLoggedIn = require('../middlewares/requireLogin');
const hasCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys', isLoggedIn, hasCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user:req.user.id,
      dateSent: Date.now()
    });
    // Place to send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
       mailer.send().then((err) => {
         if (err) console.log(err);
          survey.save();
       });

      req.user.credits --;
      var user =  req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }

  });
};
