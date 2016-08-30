var Q = require('q');
var Collections = require('./collectionsModel.js');

var findAll = Q.nbind(Collections.find, Collections);
var createCollection = Q.nbind(Collections.create, Collections);
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
    var name = req.body.name;
    findCollection({ name: name })
      .then(function(data) {
        if (data) {
          res.send(data);
        } else {
          return;
        }
      })
      .then(function() {
        var collection = {
          name: name,
        };
        return createCollection(collection);
      })
      .then(function(created) {
        if (created) {
          res.send(created);
        }
      })
      .fail(function(err) {
        console.log(err);
      });

  }
};