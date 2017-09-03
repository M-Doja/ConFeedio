const mongoose = require('mongoose'),
      {Schema} = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String
  },
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('Users', userSchema);

console.log('Model Here');

// module.exports = {User} = mongoose.model('User', userSchema);
