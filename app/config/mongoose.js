const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost/sample_app';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true
}).catch(error => {
  console.error('Encountered error when connecting to DB -', err);
});

require('../models/User');
