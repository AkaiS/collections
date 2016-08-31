var collectionsController = require('../collections/collectionsController.js');
var itemController = require('../item/itemController.js');
var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.get('/api/collections', collectionsController.getCollections);
  app.post('/api/collections', collectionsController.postCollection);

  app.get('/api/item', itemController.getCollection);
  app.post('/api/item', itemController.postItem);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
  
