var collectionsController = require('../collections/collectionsController');
var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.get('/api/collections', collectionsController.getCollections);
  app.post('/api/collections', collectionsController.postCollection);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
  
