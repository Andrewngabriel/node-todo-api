var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   email: '      Andrew@AndrewTechful.com       '
// });

// newUser.save().then((doc) => {
//   console.log('Saved item succesfully', doc);
// }, (e) => {
//   console.log('Unable to save item', e);
// });

module.exports = {User};