const mongoose = require('mongoose'),
      {Schema} = mongoose;

const recipientSchema = new Schema({
  email: {
    type: String
  },
  responded: {
    type: Boolean,
    default: false
  }
});

module.exports = recipientSchema;

console.log('Model Here');
