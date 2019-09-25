const ConsumerController = require('./consumer.controller');

module.exports = (app) => {
    app.get('/v1/consumer/:consumerid', ConsumerController.findConsumerController);
};
