var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  collectionName: String
});

module.exports = mongoose.model('Item', ItemSchema);