var mongoose = require('mongoose');

var CollectionSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  collection: { type: String, ref: 'Collections' }
});

module.exports = mongoose.model('Collection', CollectionSchema);