const mongoose = require('mongoose'),
      {Schema} = mongoose,
      RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
      yes: {
        type: Number,
        default: 0
      },
      no: {
        type: Number,
        default: 0
      },
      subject: {
        type: String,
        required: true,
        trim: true
      },
      title: {
        type: String,
        required: true,
        trim: true
      },
      body: {
        type: String,
        required: true,
        trim: true
      },
      recipients: [RecipientSchema],
      _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      dateSent: Date,
      lastResponeded: Date
    });

mongoose.model('surveys', surveySchema);

console.log('Survey model Here');

// module.exports = {User} = mongoose.model('User', userSchema);
