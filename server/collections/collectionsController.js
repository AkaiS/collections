var Q = require('q');
var Collections = require('./collectionsModel.js');

var findAll = Q.nbind(Collections.find, Collections);
var create = Q.nbind(Collections.create, Collections);
var findCollection = Q.nbind(Collections.findOne, Collections);

module.exports = {
  getCollections: function(req, res, next) {
    findAll({})
      .then(function(collections) {
        res.json(collections);
      })
      .fail(function(err) {
        next(err);
      });
  },
  postCollection: function(req, res, next) {

    findCollection({ name: req.body.collectionName})
      .then(function(data) {
        if (data) {
          res.send(data);
        } else {
          return;
        }
      })
      .then(function() {
        var collection = {
          name: req.body.collectionName,
        };
        create(collection);
      })
      .fail(function(err) {
        console.log(err);
      });

  }
};