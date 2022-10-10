'use strict';

const Mongoose = require('mongoose');

const artworkSchema = new Mongoose.Schema({
  title: String,
  medium: String,
  size: { height: Number, width: Number },
  year: Number,
  imageUrl: String,
});

module.exports = Mongoose.model('Artwork', artworkSchema);
