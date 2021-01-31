/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((e) => {
    console.log('Error occured while connecting. See error below');
    console.log(e);
  });
module.exports = mongoose;
