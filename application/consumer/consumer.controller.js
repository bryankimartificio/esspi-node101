
/*
const ConsumerService = require('./consumer.service');

exports.findConsumerController = (req, res) => {
    res.status(200)
        .send('My Data');
};
*/
//
//
//
//
//
//

const ConsumerService = require('./consumer.service');

exports.findConsumerController = (req, res) => {
    const id = 25;
    ConsumerService.findConsumerServiceById(id)
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
        });
};
