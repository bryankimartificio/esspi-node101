const ConsumerController = require('./consumer.controller');

module.exports = (app) => {
    // app.get('/v1/consumer/', (req, res) => res.send('Hello World by ExpressJs GET!'));

    /**/
    app.get('/v1/consumer/', ConsumerController.findConsumerController);
};
