const mongoose = require('mongoose'),
      {Schema} = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String
  }
});

mongoose.model('Users', userSchema);

console.log('Model Here');

// module.exports = {User} = mongoose.model('User', userSchema);
