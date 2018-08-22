const mongoose = require('mongoose');
const encrypt = require('../utils/encrypt');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: '{PATH} is required!'
  },
  email: {
    type: String,
    index: { unique: true, dropDups: true },
    maxlength: 255,
    match: /[\w+\-.]+@[a-z\d\-.]+\.[a-z]+/,
    required: '{PATH} is required!'
  },
  salt: { type: String, required: '{PATH} is required!' },
  hashed_pwd: { type: String, required: '{PATH} is required!' }
});

const User = mongoose.model('User', userSchema);

const sampleUsers = [
  {
    name: 'Mary',
    email: 'mary@example.com',
    pwd: 'foobar'
  },
  {
    name: 'John',
    email: 'john@example.com',
    pwd: 'foobar'
  }
];

User.find().then(users => {
  if (users.length === 0) {
    sampleUsers.forEach(({ name, email, pwd }) => {
      const data = {};
      data.name = name;
      data.email = email;
      data.salt = encrypt.createSalt();
      data.hashed_pwd = encrypt.hashPwd(data.salt, pwd);
      User.create(data).catch(err => {
        console.error(err);
      });
    });
  }
}).catch(err => {
  console.error(err);
});
