var collectionsController = require('../collections/collectionsController');
var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.get('/api/collections', collectionsController.getCollections);
  app.post('/api/collections', collectionsController.postCollection);

  app.get('/api/collection', collectionsController.getCollection);
  app.post('/api/collection', collectionsController.postItem);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
  
