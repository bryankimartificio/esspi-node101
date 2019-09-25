
const ConsumerService = require('./consumer.service');

exports.findConsumerController = (req, res) => {
    const consumerId = req.params.consumerid;
    ConsumerService.findConsumerServiceById(consumerId)
        .then((consumer) => {
            if (consumer.status === 200) {
                res
                    .status(200)
                    .send(consumer);
            } else {
                res
                    .status(400)
                    .send(consumer);
            }
        })
        .catch((error) => {
            console.log(error);
            res
                .status(400)
                .send('Internal Server error');
        });
};
