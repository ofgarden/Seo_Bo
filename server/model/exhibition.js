'use strict';

const Mongoose = require('mongoose');

const exhibitionSchema = new Mongoose.Schema({
  title: String,
  begindate: Date,
  enddate: Date,
  venue: { name: String, address: String },
  location: { latitude: Number, longitude: Number },
  homepageUrl: String,
});

module.exports = Mongoose.model('Exhibition', exhibitionSchema);
