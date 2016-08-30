var mongoose = require('mongoose');

var CollectionSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

module.exports = mongoose.model('Collection', CollectionSchema);