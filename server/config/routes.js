var collectionsController = require('../collections/collectionsController');

module.exports = function(app, express) {
  app.get('api/collections', collectionsController.getCollections);
  app.post('api/collections', collectionsController.postCollection);
};
  
