/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /* eslint-disable no-multiple-empty-lines */
const mongoose = require('mongoose');

const CafeeSchema = new mongoose.Schema({
  name: String,
  longitude: String,
  latitude: String,
  vicinity: String,
  workingDays: String,
  workingHoursStart: String,
  workingHoursEnd: String,
});

const Cafee = new mongoose.model('Cafee', CafeeSchema);
module.exports = Cafee;
