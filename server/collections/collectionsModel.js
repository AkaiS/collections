var mongoose = require('mongoose');

var CollectionsSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Collections', CollectionsSchema);