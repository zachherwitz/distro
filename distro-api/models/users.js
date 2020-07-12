const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  callsheet: {
    callTime: String,
    genCallTime: String,
    location: String,
    genLocation: String
  },
  department: String,
  distros: [String],
  email: String,
  name: String,
  phone: String,
  projectId: String,
  role: String
},
{
  timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;
