var Q = require('q');
var Item = require('./ItemModel.js');

var findAll = Q.nbind(Item.find, Item);
var createItem = Q.nbind(Item.create, Item);
var findItem = Q.nbind(Item.findOne, Item);

module.exports = {
  getCollection: function(req, res, next) {
    var name = req.param('name');
    var query = {};
    query['collectionName'] = name;
    findAll(query)
      .then(function(item) {
        res.json(item);
      })
      .fail(function(err) {
        next(err);
      });
  },
  postItem: function(req, res, next) {
    var name = req.body.name;
    findItem({ name: name })
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
          description: req.body.description,
          collectionName: req.body.collectionName
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