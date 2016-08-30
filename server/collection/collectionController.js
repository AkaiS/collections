var Q = require('q');
var Collection = require('./collectionModel.js');

var findAll = Q.nbind(Collection.find, Collection);
var createItem = Q.nbind(Collection.create, Collection);
var findCollection = Q.nbind(Collection.findOne, Collection);

module.exports = {
  getCollection: function(req, res, next) {
    findAll({})
      .then(function(collection) {
        res.json(collection);
      })
      .fail(function(err) {
        next(err);
      });
  },
  postItem: function(req, res, next) {
    findCollection({ name: name })
      .then(function(data) {
        if (data) {
          res.send(data);
        } else {
          return;
        }
      })
      .then(function() {
        var item = {
          name: req.body.name,
          image: req.body.image,
          description: req.body.description
        };
        return createItem(item);
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